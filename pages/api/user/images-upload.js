// images-upload

import multer from "multer";
import { storage } from "../../../cloudinary/cloudinaryConfig";

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

const handler = async (req, res) => {
  const multerUpload = multer({ storage });
  await runMiddleware(req, res, multerUpload.array("files"));
  const files = req.files;
  const others = req.body;
  console.log("__REQ FILES__");
  console.log(files);
  console.log("__REQ BODY__");
  console.log(others);
  res.status(200).json({ message: "It worked" });
};

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

export default handler;
