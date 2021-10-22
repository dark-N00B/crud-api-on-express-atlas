import Product from '../models/products.js';



export const getProduct = async (req, res) => {
    try{
        const gotProducts = await Product.find();
        res.status(200).json({response: "Got All Products", data: gotProducts})
    }
    catch(err){
        res.status(409).json({response: "Failed to retreive data", data: [], error: err})
    }
}


export const addProduct = async (req, res) => {
    try {
        const product_name = req.body.product_name;
        const product_description = req.body.product_description;
        const product_quantity = req.body.product_quantity;
        const user = req.body.user;
        
        
        const newProduct = new Product({
            product_name: product_name,
            product_description: product_description,
            product_quantity: product_quantity,
            user: user
        });

        console.log(newProduct);
        
        const savedProduct = await newProduct.save();
        res.status(201).json({response: "Added Succesfully", data: savedProduct})
    }
    catch(err) {
        res.status(409).json({success: false, data: [], error: err})
    }
}

export default addProduct;