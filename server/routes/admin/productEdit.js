import { Router } from "express";
import Product from "../../models/product.js";
import winston from "winston";
import { upload, resizeAndCompressImages } from '../../config/multer.js';

const router = Router();

router.post('/addimage/:id', upload.array("images"), resizeAndCompressImages(700, 700), async (req, res) => {
  const productId = req.params.id;
  const processedImages = req.processedImages;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Add processedImages to the product's images array
    const updatedImages = [...product.images, ...processedImages];

    // Update the product in the database with the modified images array
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { images: updatedImages },
      { new: true } // Return the modified document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error adding images:", error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Route to edit a product by ID
router.put('/productedit/:id', async (req, res) => {
  const productId = req.params.id;
  const { name, images, price, shortIntroduction, description, reviews, quantity } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        name,
        images,
        price,
        shortIntroduction,
        description,
        reviews,
        quantity,
      },
      { new: true } // Return the modified document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;