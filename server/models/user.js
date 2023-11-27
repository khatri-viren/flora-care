import { Schema, model } from "mongoose";
import mongoose from "mongoose";

const user = new Schema({
  firstname: { type: String, required: true },
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  // Address information
  address: {
    addressline1: { type: String, default: "" },
    addressline2: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    pincode: { type: String, default: "" },
  },

  // E-commerce related information
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],

  // Blog related information
  blog: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],

  // Additional user information
  profile: {
    phoneno: { type: String, default: "" },
    avatar: { type: String, default: "" },
    bio: { type: String, default: "" },
    socialLinks: {
      twitter: { type: String, default: "" },
      facebook: { type: String, default: "" },
      instagram: { type: String, default: "" },
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
