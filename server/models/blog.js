// blogSchema.js
import { Schema, model } from "mongoose";

const contributorSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String },
});

const blogSchema = new Schema({
  images: [{ type: String, required: true }],
  title: { type: String, required: true },
  intro: { type: String, required: true },
  content: { type: String, required: true },
  conclusion: { type: String, required: true },
  readTime: { type: Number }, // Represented in minutes
  contributors: [contributorSchema], 
  dateUploaded: { type: Date }, 
});

export default model("Blog", blogSchema);
