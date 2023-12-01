import { Router } from "express";
import Product from "../models/product.js";

const router = Router();

// Route to add reviews for a product by ID
router.post('/:id/addreview', async (req, res) => {
    const productId = req.params.id;
    const { stars, reviewText, firstname, lastname, email } = req.body;
  
    try {
      const product = await Product.findById(productId);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Create a new review object
      const newReview = {
        stars,
        reviewText,
        firstname,
        lastname,
        email,
      };
  
      // Add the new review to the product's reviews array
      product.reviews.push(newReview);
  
      // Save the updated product with the new review
      await product.save();
  
      res.status(201).json({ message: 'Review added successfully', review: newReview });
    } catch (error) {
      console.error("Error adding review:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

export default router;

