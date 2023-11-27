import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  user: {
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, required: true, unique: true },

    // Address information
    address: {
      addressline1: { type: String, default: "" },
      addressline2: { type: String, default: "" },
      city: { type: String, default: "" },
      state: { type: String, default: "" },
      pincode: { type: String, default: "" },
    },
  },
  products: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    enum: ["Shipped", "Delivered", "Placed"],
    default: "Placed",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = model("Order", orderSchema);

export default Order;
