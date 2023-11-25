import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  stars: { type: Number, required: true },
  reviewText: { type: String, required: true },
});

const productSchema = new Schema({
  name: { type: String, required: true },
  images: [{ type: String, required: true }],
  price: { type: Number, required: true },
  shortIntroduction: { type: String, required: true },
  description: { type: String, required: true },
  reviews: [reviewSchema],
  quantity: { type: Number, required: true },
});

export default model("Product", productSchema);
