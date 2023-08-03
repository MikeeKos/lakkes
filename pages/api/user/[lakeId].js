import { connectDatabase } from "../../../helpers/db-util";
import Lake from "../../../models/Lake";
import mongoose from "mongoose";
import Comment from "../../../models/Comment";
import multer from "multer";
import {
  storage,
  cloudinary,
  uploader,
} from "../../../cloudinary/cloudinaryConfig";
import { promisify } from "util";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
const mapBoxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

const upload = multer({ storage }).array("files");

async function handler(req, res) {
  const lakeId = req.query.lakeId;
  const method = req.method;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }

  const session = await getServerSession(req, res, authOptions);
  console.log("___SESSION___");
  console.log(session);

  if (!session) {
    return res.status(422).json({ message: "Unathenticated User" });
  }

  const multerUpload = promisify(upload);

  switch (method) {
    //getting data for edit form, used in pages/list/[lakeId]/edit.js
    case "GET":
      try {
        const lake = await Lake.findById(lakeId).populate("images");
        if (!lake) {
          return res.status(400).json({ message: "failed to find lake" });
        }
        res
          .status(200)
          .json({ message: "successfully found lake", data: lake });
      } catch (error) {
        res.status(400).json({ message: "could not find lake with that id" });
      }
      break;

    //changing data, used in components/createOrEdit/lakeForm.js
    case "PUT":
      try {
        console.log("_SESSION_");
        console.log(session.user.email);
        // const JSONemailFromSession = JSON.stringify(session.user.email);
        // const JSemailFromSession = JSON.parse(JSONemailFromSession);
        // let checkedUser;
        // try {
        //   checkedUser = await User.findOne({ email: session.user.email });
        //   if (!checkedUser) {
        //     return res
        //       .status(422)
        //       .json({ message: "Cannot find user with that email" });
        //   }
        // } catch (error) {
        //   return res
        //     .status(422)
        //     .json({ message: "Other error in try/catch block in API (check)" });
        // }
        // console.log("_C_H_E_C_K_E_D___U_S_E_R_");
        // console.log(checkedUser);
        const ownerOfThisPost = await Lake.findById(lakeId).populate('author');
        console.log("******CHECK OWNERSHIP*******")
        if (session.user.email !== ownerOfThisPost.author.email) {
          return res.status(422).json({message: "This user is not owner of this post"})
        }

        await multerUpload(req, res);
        const uploadedImages = req.files;

        const JSONPayload = JSON.parse(req.body.JSONPayload);
        const JSONImagesArray = JSON.parse(req.body.JSONImagesArray);

        const primaryData = {
          title: JSONPayload.title,
          description: JSONPayload.description,
          location: JSONPayload.location,
        };

        const geoData = await geocoder
          .reverseGeocode({
            query: [JSONPayload.longitude, JSONPayload.latitude],
            limit: 1,
          })
          .send();
        console.log("_______GEO_DATA_______");
        console.log(geoData.body.features[0].place_name);

        const lake = await Lake.findByIdAndUpdate(lakeId, { ...primaryData });
        if (!lake) {
          return res
            .status(400)
            .json({ message: "Could not find a lake with that ID" });
        }
        const images = uploadedImages.map((file) => ({
          url: file.path,
          filename: file.filename,
        }));
        lake.images.push(...images);
        if (JSONImagesArray.length !== 0) {
          JSONImagesArray.map(async (image) => {
            console.log("___SHOW FILENAMES___");
            console.log(image);
            await uploader.destroy(image, { invalidate: true });
          });
          await lake.updateOne({
            $pull: { images: { filename: { $in: JSONImagesArray } } },
          });
        }

        lake.geometry = {
          type: "Point",
          coordinates: [JSONPayload.longitude, JSONPayload.latitude],
        };
        lake.subtitle = geoData.body.features[0].place_name;

        await lake.save();

        console.log("___IT SHOULD BE ARRAY WITH IMAGES FOR DELETION___");
        console.log(JSONImagesArray);
        console.log("___IT SHOULD BE DATA___");
        console.log(JSONPayload);
        console.log("___IT SHOULD BE IMAGES___");
        console.log(uploadedImages);

        console.log("___At least reached TRY/CATCH block___");
        res.status(200).json({ message: "successfully updated" });
      } catch (error) {
        res.status(400).json({
          message: "validation failed",
        });
      }
      break;

    //deleting object, used in components/lakes/lake-detail/lake-content
    case "DELETE":
      try {
        const currentLake = await Lake.findOne({
          _id: lakeId,
        })
          .populate("comments")
          .populate("images");
        console.log("___CHECK CURRENT LAKE___");
        console.log(currentLake);
        if (!currentLake) {
          return res
            .status(400)
            .json({ message: "could not find lake with this id" });
        }

        currentLake.images.map(async (image) => {
          console.log("___SHOW FILENAMES FOR DESTROYING___");
          console.log(image.filename);
          await uploader.destroy(image.filename, { invalidate: true });
        });

        const commentsThatShouldBeRemoved = currentLake.comments.map((doc) =>
          doc._id.toString()
        );
        const deletedComments = await Comment.deleteMany({
          _id: commentsThatShouldBeRemoved,
        });
        console.log("DELETED COMMENTS");
        console.log(deletedComments);

        const deleteLake = await Lake.deleteOne({ _id: lakeId });
        if (!deleteLake) {
          return res
            .status(400)
            .json({ message: "could not find lake with this id" });
        }
        res.status(200).json({ message: "successfully deleted" });
      } catch (error) {
        res.status(400).json({ message: "could not delete data" });
      }
      break;

    default:
      res.status(400).json({ message: "Bad method (not GET/PUT/DELETE)" });
      break;
  }

  console.log("CLOSING CONNECTION");
  mongoose.connection.close();
}

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default handler;
