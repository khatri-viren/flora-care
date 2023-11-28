import express from "express";
import { promises as fsPromises } from "fs";
import path from "path";
import Product from "../../models/product.js";

const router = express.Router();
const { unlink } = fsPromises;

// Get the current module file path
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Route to delete a specific product
router.delete("/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Assuming the images are stored in the 'uploads' directory
    const imagesDirectory = path.join(__dirname, "../../uploads");

    // Delete both the original and resized images associated with the product from the uploads folder
    for (const imageName of product.images) {
      const imagePathOriginal = path.join(imagesDirectory, imageName);
      const imagePathResized = path.join(
        imagesDirectory,
        `resized_${imageName}`
      );

      try {
        await unlink(imagePathOriginal);
        await unlink(imagePathResized);
      } catch (error) {
        console.error(`Failed to delete image ${imageName}:`, error);
      }
    }

    // Delete the product from the database
    await Product.findByIdAndDelete(productId);

    res.json({ message: "Product and associated images deleted successfully" });
  } catch (error) {
    console.error("Failed to delete product:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
