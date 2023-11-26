import express from "express";
import Blog from "../../models/blog.js";
import { promises as fsPromises } from 'fs';
import path from 'path';

const router = express.Router();
const { unlink } = fsPromises;

// Get the current module file path
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Route to delete a specific blog by ID
router.delete("/:id", async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Delete the images associated with the blog from the uploads folder
    for (const image of blog.images) {
      const imagePath = path.join(__dirname, '../../uploads', image);

      try {
        await unlink(imagePath);
      } catch (error) {
        console.error(`Failed to delete image ${image}:`, error);
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
