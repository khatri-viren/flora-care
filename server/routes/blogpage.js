import express from 'express';
import Blog from '../models/blog.js';
const router = express.Router();

router.get("/:id", async (req, res) => {
    const blogId = req.params.id;
  
    try {
      const blog = await Blog.findById(blogId);
  
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  export default router;