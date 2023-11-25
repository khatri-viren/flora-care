// routes/admin/addproduct.js
const express = require('express');
const router = express.Router();
const Product = require('../../models/Products');
const winston = require('winston');

// Configure the Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Route to add a new product
router.post('/', async (req, res) => {
  console.log('Received request to add product:', req.body);
  console.log('Uploaded files:', req.files);

  try {
    const imagesArray = req.files.map((file) => file.path); // Get an array of file paths

    const newProduct = new Product({
      name: req.body.name,
      images: imagesArray,
      price: req.body.price,
      shortIntroduction: req.body.shortIntroduction,
      description: req.body.description,
      quantity: req.body.quantity,
    });

    const savedProduct = await newProduct.save();
    console.log('Product successfully saved:', savedProduct);

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
