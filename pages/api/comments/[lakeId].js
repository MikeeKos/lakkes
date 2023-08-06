import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import Comment from "../../../models/Comment";
import Lake from "../../../models/Lake";
import User from "../../../models/User";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import Joi from "joi";

async function handler(req, res) {
  const {
    query: { lakeId },
    method,
  } = req;

  //Establish connection to the database
  try {
    await connectDatabase();
  } catch (error) {
    return res.status(503).json({ message: "Failed to connect to server" });
  }

  switch (method) {
    //Add comment to database, used in components/comments/comments.js
    case "POST":
      //Check if user is logged in
      const session = await getServerSession(req, res, authOptions);
      if (!session) {
        return res.status(401).json({ message: "User is not logged in" });
      }

      //Find user with email that match email from session
      const JSONemailFromSession = JSON.stringify(session.user.email);
      const JSemailFromSession = JSON.parse(JSONemailFromSession);
      let checkedUser;
      try {
        checkedUser = await User.findOne({ email: JSemailFromSession });
        if (!checkedUser) {
          return res.status(400).json({ message: "Cannot find matching user" });
        }
      } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
      }

      //Server side validation of req.body
      const reqBodySchema = Joi.object({
        text: Joi.string().min(1).max(1000).required(),
      }).required();
      const validity = reqBodySchema.validate(req.body);
      if (validity.error) {
        return res
          .status(401)
          .json({ message: "Failed server side validation" });
      }
      const { text } = req.body;

      //create new comment
      const newComment = {
        email: checkedUser.email,
        name: checkedUser.username,
        text: text,
      };

      //add comment to database
      try {
        const comment = new Comment(newComment);
        const lake = await Lake.findById(lakeId);
        if (!lake) {
          return res
            .status(400)
            .json({ message: "failed to find lake with ID in url" });
        }
        lake.comments.push(comment);
        comment.author = checkedUser;
        await comment.save();
        await lake.save();
        res.status(201).json({
          message: "The comment has been added",
          comment: comment
        });
      } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        return;
      }
      break;

    case "GET":
      //Get comment for specific object, used in components/comments/comments.js
      try {
        const lake = await Lake.findById(lakeId).populate("comments");
        if (!lake) {
          return res.status(400).json({ message: "Failed to find lake" });
        }
        const result = lake.comments;

        res
          .status(200)
          .json({ message: "Success", comments: result });
      } catch (error) {
        res.status(500).json({ message: "Could not find comments" });
      }

      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }

  mongoose.connection.close();
}

export default handler;
