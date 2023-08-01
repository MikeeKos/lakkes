import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    maxlength: [10, "Name cannot be more than 10 characters"],
  },
  email: {
    type: String,
    required: true,
    maxlength: [10, "Name cannot be more than 10 characters"],
  },
  // lakeId: {
  //   type: String,
  //   required: true,
  // },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
