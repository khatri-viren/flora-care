import { Router } from "express";
import Order from "../../models/order.js";

const router = Router();

router.get("/orders", async (req, res) => {
  try {
    // Fetch all orders from the database
    const orders = await Order.find();

    // Send the orders as a JSON response
    res.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Export the router
export default router;
