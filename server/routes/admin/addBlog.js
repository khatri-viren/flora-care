import express from "express";
import { upload, resizeAndCompressImages } from "../../config/multer.js";
import Blog from "../../models/blog.js";

const router = express.Router();

// Use resizeAndCompressImages middleware with different width and height parameters
router.use(upload.array("images", 5), resizeAndCompressImages(600, 300));

router.post("/", async (req, res) => {
  try {
    const {
      title,
      intro,
      content,
      conclusion,
      contributorName,
      contributorPosition,
    } = req.body;
    const images = req.processedImages; // Use the processed images

    const newBlog = new Blog({
      title,
      intro,
      content,
      conclusion,
      images,
      contributors: [
        {
          name: contributorName,
          position: contributorPosition,
        },
      ],
      dateUploaded: new Date(),
    });

    // Save the blog entry
    await newBlog.save();

    // Respond with success message
    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    console.error("Error adding blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
