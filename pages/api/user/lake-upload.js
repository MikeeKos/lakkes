import multer from "multer";
import { storage } from "../../../cloudinary/cloudinaryConfig";
import { promisify } from "util";
import Lake from "../../../models/Lake";
import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";

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

      try {
        await multerUpload(req, res);
        const uploadedFiles = req.files;

        const JSONPayload = JSON.parse(req.body.JSONPayload);
        const lake = new Lake(JSONPayload);
        await lake.save();

        console.log("___IT SHOULD BE DATA___");
        console.log(JSONPayload);
        console.log("___IT SHOULD BE IMAGES___");
        console.log(uploadedFiles);

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
