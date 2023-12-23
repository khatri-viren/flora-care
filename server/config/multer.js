import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import sharp from "sharp";
import { config } from "dotenv"
config();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_S3_BUCKET_NAME,
    acl: "public-read", // Set the appropriate ACL for your use case
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "_" + file.originalname);
    },
  }),
});

// Middleware for image compression and resizing
const resizeAndCompressImages = (width, height) => async (req, res, next) => {
  try {
    const files = req.files;
    const processedImages = [];

    for (const file of files) {
      const resizedImageName = `resized_${file.key}`; // Assuming 'key' contains the S3 object key
      const imageBuffer = await sharp(file.buffer)
        .resize({ width: width, height: height, fit: 'fill' })
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toBuffer();

      await s3.putObject({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: resizedImageName,
        Body: imageBuffer,
        ACL: "public-read", // Set the appropriate ACL for your use case
      }).promise();

      processedImages.push(resizedImageName);
    }

    req.processedImages = processedImages;
    next();
  } catch (error) {
    console.error("Error processing images:", error);
    return res.status(500).json({ error: "Error processing images" });
  }
};

export { upload, resizeAndCompressImages };
