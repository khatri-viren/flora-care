import multer from "multer";
import { extname, join } from "path";
import sharp from "sharp";
import fs from "fs/promises";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Middleware for image compression and resizing
const resizeAndCompressImages = (width, height) => async (req, res, next) => {
  try {
    const files = req.files;
    const processedImages = [];

    for (const file of files) {
      const resizedImageName = `resized_${file.filename}`;
      await sharp(file.path)
        .resize({ width: width, height: height, fit: 'fill' })
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(join("uploads/", resizedImageName));

      processedImages.push(resizedImageName);

      // Delete the original image after processing
      await fs.unlink(file.path);
    }

    req.processedImages = processedImages;
    next();
  } catch (error) {
    console.error("Error processing images:", error);
    return res.status(500).json({ error: "Error processing images" });
  }
};


export { upload, resizeAndCompressImages };
