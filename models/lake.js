import mongoose from "mongoose";

const LakeSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
});

export default mongoose.models.Lake || mongoose.model('Lake', LakeSchema)