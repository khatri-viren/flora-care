import { Router } from "express";
import Blog from "../../models/blog.js";

const router = Router();

// Route to get all blogs for admin management
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
