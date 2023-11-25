// routes/admin/manageproducts.js
const express = require('express');
const router = express.Router();
const Product = require('../../models/Products'); // Adjust the path based on your project structure

// Route to get all products for admin management
// router.get('/', async (req, res) => {
//   try {
//     const products = await Product.find(); // Retrieve all products
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get('/', (req, res) => {
  // Handle the GET request here
  res.send('This is the manageproduct route');
});

module.exports = router;
