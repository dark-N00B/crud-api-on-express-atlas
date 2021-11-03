import express from 'express';
import addProduct from '../crud_components/addProduct.js';
import {getAllProducts, getProductsByUser, getProductById} from '../crud_components/getProducts.js';
import updateProduct from '../crud_components/updateProduct.js';
import deleteProduct from '../crud_components/deleteProduct.js';



const router = express.Router();

router.post("/add", addProduct);
router.get("/", getAllProducts);
router.get("/user/:userId", getProductsByUser);
router.get("/id/:productId", getProductById);
router.patch("/update/:productId", updateProduct);
router.delete("/remove/:productId", deleteProduct);


export default router;