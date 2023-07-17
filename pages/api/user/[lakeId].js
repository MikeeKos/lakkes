import { connectDatabase } from "../../../helpers/db-util";
import Lake from "../../../models/Lake";
import mongoose from "mongoose";
import Comment from "../../../models/Comment";

export default async function handler(req, res) {
  const {
    query: { lakeId },
    method,
  } = req;

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }

  switch (method) {
    //getting data for edit form, used in pages/list/[lakeId]/edit.js
    case "GET":
      try {
        const lake = await Lake.findById(lakeId);
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
        const lake = await Lake.findByIdAndUpdate(lakeId, req.body, {
          new: true,
          runValidators: true,
        });
        if (!lake) {
          return res
            .status(400)
            .json({ message: "Could not find a lake with that ID" });
        }
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
        }).populate("comments");
        if (!currentLake) {
          return res
            .status(400)
            .json({ message: "could not find lake with this id" });
        }
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
