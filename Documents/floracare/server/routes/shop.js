const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

// Route to get only necessary data for product cards
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// router.get('/', (req, res) => {
//   // Handle the GET request here
//   res.send('This is the shop route');
// });

module.exports = router;
