import Lake from "../../../models/Lake";
import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";

async function handler(req, res) {
  const method = req.method;
  // find a way to read req.body
  // check what happens when is is passed to new Lake()

  //Establish connection to the database
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }

  switch (method) {
    //components/createOrEdit/lakeForm.js
    case "POST":
      //server side validity check

      try {
        const lake = new Lake(req.body);
        await lake.save();
        res.status(201).json({
          message: "successfully added the lake to database",
          data: lake,
        });
      } catch (error) {
        res.status(500).json({ message: error });
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
}

export default handler;
