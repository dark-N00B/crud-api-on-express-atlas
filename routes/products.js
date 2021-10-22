import express from 'express';
import {addProduct, getProduct} from '../controllers/products.js';





const router = express.Router();

router.post("/add", addProduct);
router.post("/get", getProduct)

export default router;