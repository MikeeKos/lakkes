// import Lake from "../../../models/Lake";
// import { connectDatabase } from "../../../helpers/db-util";
// import mongoose from "mongoose";
// // import multer from "multer";
// // import { storage } from "../../../cloudinary/cloudinaryConfig";

// // function runMiddleware(req, res, fn) {
// //   return new Promise((resolve, reject) => {
// //     fn(req, res, (result) => {
// //       if (result instanceof Error) {
// //         return reject(result);
// //       }
// //       return resolve(result);
// //     });
// //   });
// // }

// async function handler(req, res) {
//   const method = req.method;
//   // find a way to read req.body
//   // check what happens when is is passed to new Lake()

//   //Establish connection to the database
//   let client;
//   try {
//     client = await connectDatabase();
//   } catch (error) {
//     res.status(500).json({ message: error });
//     return;
//   }

//   switch (method) {
//     //components/createOrEdit/lakeForm.js
//     case "POST":
//       //server side validity check

//       try {
//         //IMAGES
//         // const multerUpload = multer({ storage });
//         // await runMiddleware(req, res, multerUpload.array("files"));
//         // console.log("___REQ.FILES___");
//         // console.log(req.files);
//         // console.log(req.body);
//         const lake = new Lake(req.body);
//         await lake.save();
//         res.status(201).json({
//           message: "successfully added the lake to database",
//           data: lake,
//         });
//       } catch (error) {
//         res.status(500).json({ message: error });
//         return;
//       }
//       break;

//     default:
//       res
//         .status(400)
//         .json({ message: "It was not either POST or GET request" });
//       break;
//   }

//   console.log("CLOSING CONNECTION");
//   mongoose.connection.close();
// }

// // export const config = {
// //   api: {
// //     bodyParser: false, // Disallow body parsing, consume as stream
// //   },
// // };

// export default handler;
