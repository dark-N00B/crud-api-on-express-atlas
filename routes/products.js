import express from 'express';
import {addProduct, getAllProducts, getProductsByUser, getProductById} from '../controllers/products.js';





const router = express.Router();

router.post("/add", addProduct);
router.post("/", getAllProducts);
router.post("/user/:userId", getProductsByUser);
router.post("/id/:productId", getProductById);


export default router;