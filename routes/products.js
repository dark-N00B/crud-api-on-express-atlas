import express from 'express';
import {addProduct, getAllProducts, getProductsByUser, getProductById, updateMovie} from '../controllers/products.js';





const router = express.Router();

router.post("/add", addProduct);
router.get("/", getAllProducts);
router.get("/user/:userId", getProductsByUser);
router.get("/id/:productId", getProductById);
router.put("/update/:productId", updateMovie);


export default router;