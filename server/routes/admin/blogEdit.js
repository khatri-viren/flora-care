
import { Router } from "express";
import Blog from "../../models/blog.js";

const router = Router();

// Route to update a specific blog by ID
router.put("/:id", async (req, res) => {
  const blogId = req.params.id;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      req.body,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;