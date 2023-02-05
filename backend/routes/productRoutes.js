import express from 'express';

const router=express.Router();

import { isAuthenticated,isAdmin } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js"

import {
    addCategory,
    addProductImage,
    createProduct,
    deleteCategory,
    deleteProduct,
    deleteProductImage,
    getAdminProducts,
    getAllCategories,
    getAllProducts,
    getProductDetails,
    updateProduct,
    getAllProductByCategory
  } from "../controller/productController.js";


router.get("/all", getAllProducts);
router.get("/all/product", getAllProductByCategory);
router.get("/admin", isAuthenticated, isAdmin, getAdminProducts);

router
  .route("/single/:id")
  .get(getProductDetails)
  .put(isAuthenticated, isAdmin, updateProduct)
  .delete(isAuthenticated, isAdmin, deleteProduct);

router.post("/new", isAuthenticated, isAdmin, singleUpload, createProduct);

router
  .route("/images/:id")
  .post(isAuthenticated, isAdmin, singleUpload, addProductImage)
  .delete(isAuthenticated, isAdmin, deleteProductImage);

router.post("/category", isAuthenticated, isAdmin, addCategory);

router.get("/categories", getAllCategories);

router.delete("/category/:id", isAuthenticated, isAdmin, deleteCategory);


export default router;