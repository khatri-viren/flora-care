import { Router } from "express";
import Product from "../models/product.js";

const router = Router();

router.get("/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const {
      name,
      images,
      price,
      shortIntroduction,
      description,
      reviews,
      quantity,
    } = product;

    res.json({
      name,
      images,
      price,
      shortIntroduction,
      description,
      reviews,
      quantity,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// router.get('/', (req, res) => {
//   // Handle the GET request here
//   res.send('This is the productpage route');
// });

export default router;
