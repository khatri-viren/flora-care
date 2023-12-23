// deleteBlogImage.js
import express from "express";
import { promises as fsPromises } from "fs";
import path from "path";
import Blog from "../../models/blog.js";
import aws from "aws-sdk";

const { unlink } = fsPromises;
const s3 = new aws.S3();
const router = express.Router();

router.delete("/:id/:imageName", async (req, res) => {
  const blogId = req.params.id;
  const imageName = req.params.imageName;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    // Specify your S3 bucket name
    const bucketName = process.env.AWS_S3_BUCKET_NAME;

    // Delete the image from S3
    await s3.deleteObject({ Bucket: bucketName, Key: imageName }).promise();

    const imagesDirectory = path.join(
      new URL(import.meta.url).pathname,
      "../../../uploads"
    );

    const imagePathResized = path.join(imagesDirectory, `${imageName}`);

    await unlink(imagePathResized);

    const updatedImages = blog.images.filter(
      (img) => img !== `resized_${imageName}`
    );

    await Blog.findByIdAndUpdate(blogId, { images: updatedImages });

    res.json({ message: "Blog image deleted successfully" });
  } catch (error) {
    console.error("Failed to delete blog image:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
