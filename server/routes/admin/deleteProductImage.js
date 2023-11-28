import { promises as fsPromises } from 'fs';
import path from 'path';
import Product from '../../models/product.js';
const { unlink } = fsPromises;
import express from 'express';

const router = express.Router();

// Route to delete a specific image associated with a product
router.delete('/:id/:imageName', async (req, res) => {
  const productId = req.params.id;
  const imageName = req.params.imageName;

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Assuming the images are stored in the 'uploads' directory
    const imagesDirectory = path.join(
      new URL(import.meta.url).pathname,
      '../../../uploads'
    );

    // const imagePathOriginal = path.join(imagesDirectory, imageName);
    const imagePathResized = path.join(imagesDirectory, `${imageName}`);

    // Delete both the original and resized images
    // await unlink(imagePathOriginal);
    await unlink(imagePathResized);

    // Remove the image name from the product's images array
    const updatedImages = product.images.filter(
      (img) => img !== `resized_${imageName}`
    );

    // Update the product in the database with the modified images array
    await Product.findByIdAndUpdate(productId, { images: updatedImages });

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Failed to delete image:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
