const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Route to get detailed information for a specific product
router.get('/:id', async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const { name, images, price, shortIntroduction, description, reviews, quantity } = product;

    res.json({
      name,
      images,
      price, 
      shortIntroduction,
      description,
      reviews,
      quantity,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// router.get('/', (req, res) => {
//   // Handle the GET request here
//   res.send('This is the productpage route');
// });

module.exports = router;
