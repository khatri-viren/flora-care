const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  stars: { type: Number, required: true },
  reviewText: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  images: [{ type: String, required: true }], 
  price: { type: Number, required: true },
  shortIntroduction: { type: String, required: true },
  description: { type: String, required: true },
  reviews: [reviewSchema],
  quantity: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
