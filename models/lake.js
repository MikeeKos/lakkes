import mongoose from "mongoose";
// import Comment from "./Comment";

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
  //GEOJSON check it (It's a standard)
  geometry: {
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
},
});

export default mongoose.models.Lake || mongoose.model("Lake", LakeSchema);
