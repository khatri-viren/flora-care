import express from "express";
import { promises as fsPromises } from "fs";
import path from "path";
import Product from "../../models/product.js";
import aws from "aws-sdk";

const router = express.Router();
const { unlink } = fsPromises;
const s3 = new aws.S3();

// Get the current module file path
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);

// Route to delete a specific product
router.delete("/:id", async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Assuming the images are stored in the 'uploads' directory
    // const imagesDirectory = path.join(__dirname, "../../uploads");

    
    // Specify your S3 bucket name
    const bucketName = process.env.AWS_S3_BUCKET_NAME;

    // Delete each image associated with the product from the S3 bucket
    for (const imageName of product.images) {
      try {
        await s3.deleteObject({ Bucket: bucketName, Key: imageName }).promise();
      } catch (error) {
        console.error(`Failed to delete image ${imageName} from S3:`, error);
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
