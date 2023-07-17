import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import Comment from "../../../models/Comment";

async function handler(req, res) {
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
    //add comment to database, used in components/comments/comments.js
    case "POST":
      //add server side validation
      const { email, name, text } = req.body;

      //server side validation
      if (!email || !name || !text) {
        res.status(422).json({ message: "invalid input" });
        return;
      }

      const newComment = {
        email: email,
        name: name,
        text: text,
        lakeId: lakeId,
      };

      console.log(lakeId);

      const comment = new Comment(newComment);
      await comment.save();
      res.status(201).json({
        message: "successfully added the comment to database",
        comment: comment,
      });
      // res.status(201).json({ message: "dummy json data" });
      break;

    case "GET":
      // const dummyList = [
      //   { id: "c1", name: "Max", text: "A first comment" },
      //   { id: "c2", name: "Manu", text: "A second comment" },
      //   { id: "c3", name: "Hello", text: "A third comment" },
      // ];
      // res.status(200).json({ comments: dummyList });
      try {
        const result = await Comment.find({});
        if (!result) {
          return res.status(400).json({ message: "failed to find comments" });
        }
        res
          .status(200)
          .json({ message: "successfully found comments", comments: result });
      } catch (error) {
        res.status(400).json({ message: "could not comments" });
      }

      break;
    default:
      res.status(400).json({ message: "Bad method" });
      break;
  }

  console.log('CLOSING CONNECTION')
  mongoose.connection.close();
}

export default handler;
