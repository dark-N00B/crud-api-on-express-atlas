import Product from '../backend/db_schema.js';



export const getAllProducts = async (req, res) => {
    try{
        const allProducts = await Product.find();
        res.status(200).json({response: "Got All Products", data: allProducts})
    }
    catch(err){
        res.status(409).json({response: "Failed to retreive data", data: [], error: err});
    }
}

export const getProductById = async (req, res) => {
    const productId = req.params.productId;
    try{
        const productsbyById = await Product.find({_id: productId});
        res.status(200).json({response: "Got Products By Product ID", data: productsbyById});
    }
    catch{
        res.status(409).json({response: "Failed to retreive data", data: [], error: err});
    }
}

export const getProductsByUser = async (req, res) => {
    const userId = req.params.userId;
    try{
        const productsbyByUser = await Product.find({user: userId});
        res.status(200).json({response: "Got Products By User ID", data: productsbyByUser});
    }
    catch{
        res.status(409).json({response: "Failed to retreive data", data: [], error: err});
    }
}

export default getAllProducts;