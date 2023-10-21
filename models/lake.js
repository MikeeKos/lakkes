import mongoose from "mongoose";
// import Comment from "./Comment";

const LakeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: [1, "Title cannot be shorter than 1"],
    maxlength: [30, "Title cannot be more than 100 characters"],
  },
  subtitle: {
    type: String,
    required: true,
    minlength: [1, "Subtitle must have at least 1 character"],
    maxlength: [1000, "Subtitle cannot be more than 1000 characters"],
  },
  description: {
    type: String,
    required: true,
    minlength: [1, "Description must have at least 1 character"],
    maxlength: [5000, "Description cannot be more than 5000 characters"],
  },
  location: {
    type: String,
    required: true,
    minlength: [1, "Location must have at least 1 character"],
    maxlength: [30, "Location cannot be more than 200 characters"],
  },
  comments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Comment",
    },
  ],
  images: [
    {
      url: {
        type: String,
        required: true,
      },
      filename: {
        type: String,
        required: true,
      },
    },
  ],
  //GEOJSON
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  author: {
    required: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

LakeSchema.path("images").validate(function (images) {
  return images.length <= 10;
}, "Images array must have less than 10 elements.");

export default mongoose.models.Lake || mongoose.model("Lake", LakeSchema);
