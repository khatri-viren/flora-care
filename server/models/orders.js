import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  user: {
    firstname: { type: String, required: true },
    lastname: String,
    email: { type: String, required: true, unique: true },

    // Address information
    address: {
      addressline1: String,
      addressline2: String,
      city: String,
      state: String,
      pincode: String,
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
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Order = model("Order", orderSchema);

export default Order;
