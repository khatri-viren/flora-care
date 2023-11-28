import { Router } from "express";
import Blog from "../../models/blog.js";
import { promises as fsPromises } from 'fs';
const { unlink } = fsPromises;
import {upload ,resizeAndCompressImages } from "../../config/multer.js"
const router = Router();

// Route to update a specific blog by ID
router.put("/:id", async (req, res) => {
  const blogId = req.params.id;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, {
      new: true,
    });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post('/addimage/:id', upload.array('images', 5), resizeAndCompressImages(600, 300), async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    const newImages = req.files.map((file) => `resized_${file.filename}`);
    const updatedImages = [...blog.images, ...newImages];

    await Blog.findByIdAndUpdate(blogId, { images: updatedImages });

    res.json({ message: 'Blog images added successfully' });
  } catch (error) {
    console.error('Error adding blog images:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
