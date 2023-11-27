import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const user = new Schema({
  firstname: { type: String, required: true },
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // Address information
  address: {
    addressline1: String,
    addressline2: String,
    city: String,
    state: String,
    pincode: String,
  },

  // E-commerce related information
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],

  // Blog related information
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
    },
  ],

  // Additional user information
  profile: {
    phoneno: String,
    avatar: String,
    bio: String,
    socialLinks: {
      twitter: String,
      facebook: String,
      instagram: String,
    },
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },

});

export default model("User", user);
