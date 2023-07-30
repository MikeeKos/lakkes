import multer from "multer";
import { storage } from "../../../cloudinary/cloudinaryConfig";
import { promisify } from "util";
import Lake from "../../../models/Lake";
import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";

import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
const mapBoxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

const upload = multer({ storage }).array("files");

const handler = async (req, res) => {
  const method = req.method;

  //Establish connection to the database
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }

  const multerUpload = promisify(upload);

  switch (method) {
    //components/createOrEdit/lakeForm.js
    case "POST":
      //SERVER SIDE VALIDATION
      //ESPECIALLY THAT ALL DATA IS THERE, BECAUSE OTHERWISE SOMEONE CAN UPLOAD IMAGES BUT NOT CREATE LAKE OBJECT

      // const geoData = await geocoder.reverseGeocode({
      //   query: [-119.571615, 37.737363],
      //   limit: 1
      // }).send()
      // console.log(geoData.body.features[0].text);
      // console.log(geoData.body.features[0].place_name);

      // const geoData = await geocoder
      //   .forwardGeocode({
      //     query: "Buenos Aires",
      //     limit: 1,
      //   })
      //   .send();
      // console.log(geoData.body.features[0].geometry.coordinates);
      // lake.geometry = geoData.body.features[0].geometry

      try {
        await multerUpload(req, res);
        const uploadedImages = req.files;

        const JSONPayload = JSON.parse(req.body.JSONPayload);
        const primaryData = {
          title: JSONPayload.title,
          description: JSONPayload.description,
          location: JSONPayload.location,
        };
        // console.log(primaryData);

        const geoData = await geocoder
          .reverseGeocode({
            query: [JSONPayload.longitude, JSONPayload.latitude],
            limit: 1,
          })
          .send();
        console.log("_______GEO_DATA_______");
        console.log(geoData.body.features[0].place_name);

        const lake = new Lake(primaryData);

        lake.images = uploadedImages.map((file) => ({
          url: file.path,
          filename: file.filename,
        }));
        lake.geometry = {
          type: "Point",
          coordinates: [JSONPayload.longitude, JSONPayload.latitude],
        };
        lake.subtitle = geoData.body.features[0].place_name;

        await lake.save();

        console.log("___IT SHOULD BE DATA___");
        console.log(JSONPayload);
        console.log("___IT SHOULD BE IMAGES___");
        console.log(uploadedImages);

        res.status(201).json({
          message: "successfully added the lake to database",
          data: lake,
        });
      } catch (error) {
        res.status(422).json({ message: error });
        return;
      }
      break;

    default:
      res
        .status(400)
        .json({ message: "It was not either POST or GET request" });
      break;
  }

  console.log("CLOSING CONNECTION");
  mongoose.connection.close();
};

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default handler;
