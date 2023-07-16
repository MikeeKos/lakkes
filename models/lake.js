import mongoose from "mongoose";

const LakeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [5, "Name cannot be shorter than 5"],
    maxlength: [10, "Name cannot be more than 10 characters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [10, "Name cannot be more than 10 characters"],
  },
  location: {
    type: String,
    required: true,
    maxlength: [10, "Name cannot be more than 10 characters"],
  },
});

export default mongoose.models.Lake || mongoose.model("Lake", LakeSchema);