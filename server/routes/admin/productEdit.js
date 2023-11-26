import { Router } from "express";
import Product from "../../models/product.js";
import winston from "winston";

const router = Router();

// Route to edit a product by ID
router.put('/productedit/:id', async (req, res) => {
  const productId = req.params.id;
  const { name, images, price, shortIntroduction, description, reviews, quantity } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        name,
        images,
        price,
        shortIntroduction,
        description,
        reviews,
        quantity,
      },
      { new: true } // Return the modified document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;