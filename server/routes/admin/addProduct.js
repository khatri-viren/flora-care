import express from "express";
import { upload, resizeAndCompressImages } from "../../config/multer.js";
import Product from "../../models/product.js";

const router = express.Router();

// Use resizeAndCompressImages middleware with width and height parameters
router.use(upload.array("images", 5), resizeAndCompressImages(700, 700));

router.post("/", async (req, res) => {
  try {
    const { name, price, shortIntroduction, description, quantity } = req.body;
    const images = req.files.map((file) => `resized_${file.filename}`);

    const newProduct = new Product({
      name,
      images,
      price,
      shortIntroduction,
      description,
      quantity,
    });

    // Save the product entry
    await newProduct.save();

    // Respond with success message
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



export default router;
