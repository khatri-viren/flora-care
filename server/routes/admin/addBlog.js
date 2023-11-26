import express from "express";
import upload from "../../config/multer.js"; 
import Blog from "../../models/blog.js";

const router = express.Router();

// Middleware to handle file uploads
router.use(upload.array("images", 5));

// Endpoint for adding a blog
router.post("/", async (req, res) => {
  try {
    // Extract data from the request body
    const { title, intro, content, conclusion } = req.body;
    const images = req.files.map((file) => file.filename);

    // For simplicity, I'm assuming you have a Blog model
    const newBlog = new Blog({
      title,
      intro,
      content,
      conclusion,
      images,
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
