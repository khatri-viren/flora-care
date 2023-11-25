import { Router } from "express";
// import addProduct from "./admin/addProduct.js";
import manageProducts from "./admin/manageProducts.js";
import productEdit from "./admin/productEdit.js";

const router = Router();

router.use([manageProducts, productEdit]);

export default router;
