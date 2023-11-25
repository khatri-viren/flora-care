// routes/admin/productedit.js
const express = require('express');
const router = express.Router();
const Product = require('../../models/Products'); // Adjust the path based on your project structure

// Route to edit a product by ID
// router.put('/:id', async (req, res) => {
//   const productId = req.params.id;
//   const { name, images, price, shortIntroduction, description, reviews, quantity } = req.body;

//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       productId,
//       {
//         name,
//         images,
//         price,
//         shortIntroduction,
//         description,
//         reviews,
//         quantity,
//       },
//       { new: true } // Return the modified document
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json(updatedProduct);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


router.get('/', (req, res) => {
  // Handle the GET request here
  res.send('This is the productedit route');
});

module.exports = router;
