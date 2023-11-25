const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// Import route modules
const shopRoutes = require('./routes/shop');
const productpageRoutes = require('./routes/productpage');
const manageProductsRoutes = require('./routes/admin/manageproducts');
const addProductRoutes = require('./routes/admin/addproduct');
const productEditRoutes = require('./routes/admin/productedit');

// Create an Express application
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Set a unique filename
  },
});

const upload = multer({ storage: storage });

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB (replace 'your-database-name' with your actual database name)
mongoose.connect('mongodb://localhost:27017/FloraCare', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Use shop route with the '/shop' endpoint
app.use('/shop', shopRoutes);

// Use productpage route with the '/productpage' endpoint
app.use('/productpage', productpageRoutes);

// Use admin routes with multer middleware for handling image uploads
app.use('/admin/manageproducts', manageProductsRoutes);
app.use('/admin/addproduct', (req, res, next) => {
  console.log('File upload middleware triggered');
  upload.array('images', 5)(req, res, (err) => {
    if (err) {
      console.error('Multer error:', err);
      return res.status(500).json({ error: 'Error uploading files' });
    }
    console.log('Files uploaded successfully');
    next();
  });
}, addProductRoutes);
app.use('/admin/productedit', productEditRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});