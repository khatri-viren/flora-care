import { Router } from "express";
import Product from "../../models/product.js";

const router = Router();

// Route to get all products for admin management
// router.get('/manageproducts', async (req, res) => {
//   try {
//     const products = await Product.find(); // Retrieve all products
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get("/manageproducts", (req, res) => {
  // Handle the GET request here
  res.send("This is the manageproduct route");
});

export default router;
