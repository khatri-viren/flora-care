import { Router } from "express";
import Order from "../models/order.js";

const router = Router();

router.get("/user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    // console.log(userId);

    // Find all orders for the specified user
    const orders = await Order.find({ userID: userId }).sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
