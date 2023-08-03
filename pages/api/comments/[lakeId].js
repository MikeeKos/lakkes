import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import Comment from "../../../models/Comment";
import Lake from "../../../models/Lake";
import User from "../../../models/User";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

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

  const session = await getServerSession(req, res, authOptions);
  console.log("___SESSION___");
  console.log(session);

  if (!session) {
    return res.status(422).json({ message: "Unathenticated User" });
  }

  // try {
  //   const checkEmail = await User.findOne({ email: session.user.email });
  //   if (!checkEmail) {
  //     return res
  //       .status(422)
  //       .json({ message: "Cannot find user with that email" });
  //   }
  // } catch (error) {
  //   return res.status(422).json({ message: "Other error in try/catch block in API (check)" });
  // }

  // Must change const to let
  // if (checkEmail.email !== session.user.email) {
  //   return res
  //     .status(422)
  //     .json({ message: "User in jwt isn't equal to user in the database" });
  // }

  switch (method) {
    //add comment to database, used in components/comments/comments.js
    case "POST":
      const JSONemailFromSession = JSON.stringify(session.user.email);
      const JSemailFromSession = JSON.parse(JSONemailFromSession);
      let checkedUser;
      try {
        checkedUser = await User.findOne({ email: JSemailFromSession });
        if (!checkedUser) {
          return res
            .status(422)
            .json({ message: "Cannot find user with that email" });
        }
      } catch (error) {
        return res
          .status(422)
          .json({ message: "Other error in try/catch block in API (check)" });
      }
      console.log("_C_H_E_C_K_E_D___U_S_E_R_");
      console.log(checkedUser);

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
      };

      try {
        const comment = new Comment(newComment);
        const lake = await Lake.findById(lakeId);
        if (!lake) {
          return res.status(400).json({ message: "failed to find lake" });
        }
        lake.comments.push(comment);
        comment.author = checkedUser;
        await comment.save();
        await lake.save();
        res.status(201).json({
          message:
            "successfully added the comment to database and comment ID to lake object",
          comment: comment,
        });
      } catch (error) {
        res.status(500).json({ message: error });
        return;
      }

      // const comment = new Comment(newComment);
      // await comment.save();
      // res.status(201).json({
      //   message: "successfully added the comment to database",
      //   comment: comment,
      // });
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
        const lake = await Lake.findById(lakeId).populate("comments");
        if (!lake) {
          return res.status(400).json({ message: "failed to find lake" });
        }
        const result = lake.comments;

        // console.log("___CHECK LAKE POPULATION___");
        // console.log(lake.comments);

        // const result = await Comment.find({});
        // if (!result) {
        //   return res.status(400).json({ message: "failed to find comments" });
        // }

        // console.log("___CHECK ALL COMMENTS____");
        // console.log(result);

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

  console.log("CLOSING CONNECTION");
  mongoose.connection.close();
}

export default handler;
