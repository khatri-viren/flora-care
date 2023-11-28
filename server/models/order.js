import { Schema, model } from "mongoose";

const orderSchema = new Schema(
  {
    userID: { type: String, required: true },
    customerID: { type: String },
    paymentIntentId: { type: String },
    products: [
      {
        id: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: { type: String, default: "pending" },
    payment_status: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Order", orderSchema);
