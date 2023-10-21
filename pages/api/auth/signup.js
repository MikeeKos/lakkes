import { connectDatabase } from "../../../helpers/db-util";
import mongoose from "mongoose";
import { hashPassword } from "../../../helpers/auth-util";
import User from "../../../models/User";

async function handler(req, res) {
  if (req.method !== "POST") {
    console.log("___Method was not POST___");
    res.status(422).json({
      message: "Method was not POST",
    });
    return;
  }

  const data = req.body;
  const { email, password, username } = data;

  //server side validation
  if (!email || !password || !username) {
    res.status(422).json({
      message: "Email and password must exist",
    });
    return;
  }

  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: error });
    return;
  }

  if (password.length < 8) {
    res
      .status(422)
      .json({ message: "password must be longer than 8 characters" });
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);
  if (!isValidEmail) {
    res.status(422).json({ message: "please use valid email" });
    return;
  }

  if (username.length > 30) {
    res.status(422).json({ message: "username cannot be longer than 30 characters" });
    return;
  }

  try {
    const emailIsUsed = await User.findOne({ email: email });
    if (emailIsUsed) {
      res.status(422).json({ message: "Email is already in use" });
      console.log("CLOSING CONNECTION");
      mongoose.connection.close();
      return;
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({
      email: email,
      password: hashedPassword,
      username: username,
    });
    await user.save();
    res.status(201).json({ message: "successfully created user" });
  } catch (error) {
    res.status(422).json({ message: "Failed to create user" });
  }

  console.log("CLOSING CONNECTION");
  mongoose.connection.close();
}

export default handler;
