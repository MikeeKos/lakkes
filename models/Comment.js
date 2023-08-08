import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [1, "Name must have at least 1 character"],
    maxlength: [1000, "Name cannot be more than 1000 characters"],
  },
  text: {
    type: String,
    required: true,
    minlength: [1, "Text must have at least 1 character"],
    maxlength: [1000, "Text cannot be more than 1000 characters"],
  },
  email: {
    type: String,
    required: true,
    minlength: [1, "Email must have at least 1 character"],
    maxlength: [100, "Emal cannot be more than 100 characters"],
  },
  author: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
