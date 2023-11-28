import express from "express";
import User from "../../models/user.js";

const router = express.Router();

router.get("/usercount", async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.json({ userCount });
  } catch (error) {
    console.error("Error fetching user count:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
