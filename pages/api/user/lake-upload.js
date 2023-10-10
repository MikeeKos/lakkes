import multer from "multer";
import { storage, uploader } from "../../../cloudinary/cloudinaryConfig";
import { promisify } from "util";
import Lake from "../../../models/Lake";
import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth";
import User from "../../../models/User";
import Joi from "joi";

import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
const mapBoxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

const upload = multer({ storage }).array("files");

const handler = async (req, res) => {
  const method = req.method;

  //Establish connection to the database
  try {
    await connectDatabase();
  } catch (error) {
    return res.status(503).json({ message: "Failed to connect to server" });
  }

  //Check if user is logged in
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: "User is not logged in" });
  }

  const multerUpload = promisify(upload);

  switch (method) {
    //create new lake object: components/createOrEdit/lakeForm.js
    case "POST":
      try {
        //Find user with email that match email from session
        const JSONemailFromSession = JSON.stringify(session.user.email);
        const JSemailFromSession = JSON.parse(JSONemailFromSession);
        let checkedUser;
        try {
          checkedUser = await User.findOne({ email: JSemailFromSession });
          if (!checkedUser) {
            return res
              .status(400)
              .json({ message: "Cannot find matching user" });
          }
        } catch (error) {
          return res.status(500).json({ message: "Something went wrong" });
        }

        //Upload images to cloudinary and check validity of req.files
        try {
          await multerUpload(req, res);
        } catch (error) {
          return res.status(500).json({ message: "Something went wrong" });
        }
        const uploadedImages = req.files;
        console.log("REQ FILES CHECKING IF THERE ARE 10 FILES")
        console.log(req.files.length)
        const fileSchema = Joi.object({
          fieldname: Joi.string().required(),
          originalname: Joi.string().required(),
          encoding: Joi.string().required(),
          mimetype: Joi.string().required(),
          path: Joi.string().uri().required(),
          size: Joi.number().integer().min(0).required(),
          filename: Joi.string().required(),
        });
        const fileArraySchema = Joi.array().items(fileSchema);
        const validity = fileArraySchema.validate(uploadedImages);
        if (validity.error) {
          return res
            .status(422)
            .json({ message: "Uploaded files are not valid" });
        }

        //check if there are correct number of files for validation
        if (req.files.length < 1 || req.files.length > 10) {
          req.files.map(async (file) => {
            await uploader.destroy(file.filename, { invalidate: true });
          });
          return res.status(400).json({ message: "You must add between 1 and 10 images" });
        }

        //Check data validity
        if (!req.body.JSONPayload) {
          req.files.map(async (file) => {
            await uploader.destroy(file.filename, { invalidate: true });
          });
          return res.status(400).json({ message: "Invalid data" });
        }
        let JSONPayload;
        try {
          JSONPayload = JSON.parse(req.body.JSONPayload);
        } catch (error) {
          req.files.map(async (file) => {
            await uploader.destroy(file.filename, { invalidate: true });
          });
          return res
            .status(400)
            .json({ message: "Data could not be processed" });
        }
        const JSONPayloadSchema = Joi.object({
          title: Joi.string().min(1).max(30).required(),
          description: Joi.string().min(1).max(1000).required(),
          location: Joi.string().min(1).max(30).required(),
          longitude: Joi.number().min(-180).max(180).required(),
          latitude: Joi.number().min(-90).max(90).required(),
        });
        const JSONPayloadValidity = JSONPayloadSchema.validate(JSONPayload);
        if (JSONPayloadValidity.error) {
          req.files.map(async (file) => {
            await uploader.destroy(file.filename, { invalidate: true });
          });
          return res
            .status(422)
            .json({ message: "Uploaded data are not valid" });
        }

        //Create object, that will be put into database
        const primaryData = {
          title: JSONPayload.title,
          description: JSONPayload.description,
          location: JSONPayload.location,
        };

        //reverse geocoding - for getting place name by passing longitude and latitude to mapbox function
        let geoData;
        try {
          geoData = await geocoder
            .reverseGeocode({
              query: [JSONPayload.longitude, JSONPayload.latitude],
              limit: 1,
            })
            .send();
        } catch (error) {
          req.files.map(async (file) => {
            await uploader.destroy(file.filename, { invalidate: true });
          });
          return res
            .status(422)
            .json({ message: "Unprocessable latitude and longitude" });
        }

        //Putting data into database
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
        lake.author = checkedUser;

        await lake.save();

        res.status(201).json({
          message: "successfully added the lake to database",
          data: lake,
        });
      } catch (error) {
        req.files.map(async (file) => {
          await uploader.destroy(file.filename, { invalidate: true });
        });
        return res.status(500).json({ message: error });
      }
      break;

    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }

  mongoose.connection.close();
};

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default handler;
