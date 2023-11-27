import { Router } from "express";
import Product from "../models/product.js";
import User from "../models/user.js";

const router = Router();

router.put("/", async (req, res) => {
  const userId = req.body.userId;
  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Update user fields based on the request body
    console.log(req.body);

    user.firstname = req.body.formData.firstname || user.firstname;
    user.lastname = req.body.formData.lastname || user.lastname;
    user.email = req.body.formData.email || user.email;
    user.password = req.body.formData.password || user.password;
    user.role = req.body.formData.role || user.role;

    // Update address information
    user.address = {
      addressline1: req.body.formData.addressline1 || user.address.addressline1,
      addressline2: req.body.formData.addressline2 || user.address.addressline2,
      city: req.body.formData.city || user.address.city,
      state: req.body.formData.state || user.address.state,
      pincode: req.body.formData.pincode || user.address.pincode,
    };

    // Update additional user information
    user.profile = {
      phoneno: req.body.formData.phoneno || user.profile.phoneno,
    };
    user.modifiedAt = Date.now();
    const updatedUser = await user.save();
    res.json(updatedUser);
    console.log(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
