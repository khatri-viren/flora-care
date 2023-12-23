import express from "express";
import Blog from "../../models/blog.js";
import { promises as fsPromises } from 'fs';
import path from 'path';
import aws from 'aws-sdk';

const router = express.Router();
const { unlink } = fsPromises;
const s3 = new aws.S3();

// Get the current module file path
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);

// Route to delete a specific blog by ID
router.delete("/:id", async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Specify your S3 bucket name
    const bucketName = process.env.AWS_S3_BUCKET_NAME;

    // Delete each image associated with the blog from the S3 bucket
    for (const image of blog.images) {
      try {
        await s3.deleteObject({ Bucket: bucketName, Key: image }).promise();
      } catch (error) {
        console.error(`Failed to delete image ${image} from S3:`, error);
      }
    }

    // Delete the blog from the database
    await Blog.findByIdAndDelete(blogId);

    res.status(200).json({ message: "Blog and associated images deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
