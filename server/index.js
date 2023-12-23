import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import passportConfig from "./config/passport.js";
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
import adminDashboardOrdersRoute from "./routes/admin/orders.js";
import adminUserCountRoute from "./routes/admin/userCount.js";
import blogsHomeRoute from "./routes/blogshome.js";
import userEditRoute from "./routes/userEdit.js";
import ordersRoute from "./routes/orders.js";
import stripe from "./routes/stripe.js";
import deleteProductImageRoute from "./routes/admin/deleteProductImage.js";
import productEditRoute from "./routes/admin/productEdit.js";
import deleteBlogImageRoute from "./routes/admin/deleteBlogImage.js";
import productAddReviewRoute from "./routes/addreview.js";
import iotRoute from "./routes/iot.js";

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
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
app.use(
  cors({
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
app.get("/", async (req, res) => {
  res.status(200).json({ message: "Flora Care Server is Live" });
});

app.use("/auth", localAuth);
app.use("/", iotRoutes);
app.use("/productpage", productPageRoute);
app.use("/shop", shopRoute);
app.use("/blogpage", blogpageRoute);
app.use("/blogshome", blogsHomeRoute);
app.use("/userdashboard", userEditRoute);
app.use("/api/stripe", stripe);
app.use("/orders", ordersRoute);
app.use("/", productAddReviewRoute);
app.use("/", iotRoute);

app.use("/admin", adminRoutes);
app.use("/admin/manageproducts", manageProductRoutes);
app.use("/admin/deleteproduct", deleteProductRoutes);
app.use("/admin/manageblogs", manageBlogsRoutes);
app.use("/admin/blogedit", blogEditRoutes);
app.use("/admin/deleteblog", deleteBlogRoute);
app.use("/admin/addblog", addBlogRoute);
app.use("/admin/addproduct", addProductRoute);
app.use("/admin/deleteproductimage", deleteProductImageRoute);
app.use("/admin/productedit", productEditRoute);
app.use("/admin/deleteblogimage", deleteBlogImageRoute);
app.use("/admin", adminDashboardOrdersRoute);
app.use("/admin", adminUserCountRoute);

// Start the server
app.listen(process.env.PORT || 4001, () => {
  console.log(`Server is running on port 4000`);
});
