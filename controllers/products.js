import Product from '../models/products.js'



const addProduct = async (req, res) => {
    console.log(req.body);
    res.send("Data");
}

export default addProduct;