import multer from "multer";
import { extname, join } from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + extname(file.originalname)); // Set a unique filename
  },
});

const upload = multer({ storage: storage });

export default upload;
