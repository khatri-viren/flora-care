import { Router } from "express";
import Product from "../../models/product.js";

const router = Router();

// Route to get all products for admin management
router.get("/", async (req, res) => {
  console.log(req.user);

  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
