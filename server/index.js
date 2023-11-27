import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import passportConfig from "./config/passport.js";
import upload from "./config/multer.js";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import localAuth from "./routes/auth/local.js";
import iotRoutes from "./routes/iot.js";
import productPageRoute from "./routes/productPage.js";
import blogpageRoute from "./routes/blogpage.js";
import shopRoute from "./routes/shop.js";
import adminRoutes from "./routes/admin.js";
import addProductRoute from "./routes/admin/addProduct.js";
import manageProductRoutes from "./routes/admin/manageProducts.js";
import deleteProductRoutes from "./routes/admin/deleteProduct.js";
import manageBlogsRoutes from "./routes/admin/manageBlogs.js";
import blogEditRoutes from "./routes/admin/blogEdit.js";
import deleteBlogRoute from "./routes/admin/deleteBlog.js";
import addBlogRoute from "./routes/admin/addBlog.js";
import blogsHomeRoute from "./routes/blogshome.js";

config();
const app = express();
// Connect to MongoDB
connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  () => {
    console.log("Connnected to Mongoose successfully!");
  },
  (err) => {
    console.log("Error while connecting" + err);
  }
);

// ------------------- Middleware --------------------
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/uploads", express.static(join(__dirname, "uploads")));

// ------------------- Routes --------------------------
app.use("/auth", localAuth);
app.use("/", iotRoutes);
app.use("/productpage", productPageRoute);
app.use("/shop", shopRoute);
app.use("/admin", adminRoutes);
app.use("/admin/manageproducts", manageProductRoutes);
app.use("/admin/deleteproduct", deleteProductRoutes);
app.use("/admin/manageblogs", manageBlogsRoutes);
app.use("/blogpage", blogpageRoute);
app.use("/admin/blogedit", blogEditRoutes);
app.use("/admin/deleteblog", deleteBlogRoute);
app.use("/admin/addblog", addBlogRoute);
app.use("/blogshome", blogsHomeRoute);

app.use(
  "/admin/addproduct",
  (req, res, next) => {
    console.log("File upload middleware triggered");
    upload.array("images", 5)(req, res, (err) => {
      if (err) {
        console.error("Multer error:", err);
        return res.status(500).json({ error: "Error uploading files" });
      }
      console.log("Files uploaded successfully");
      next();
    });
  },
  addProductRoute
);

// Start the server
app.listen(process.env.PORT || 4001, () => {
  console.log(`Server is running on port 4000`);
});
