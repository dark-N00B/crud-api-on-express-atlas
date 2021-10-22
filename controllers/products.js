import Product from '../models/products.js';



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

export const updateMovie = async (req, res) => {
    const productId = req.params.productId;
    const product_name = req.body.product_name;
    const product_description = req.body.product_description;
    const product_quantity = req.body.product_quantity;
    const user = req.body.user;

    try{
        await Product.updateOne({_id: productId}, {$set: {
            product_name: product_name,
            product_description: product_description,
            product_quantity: product_quantity,
            user: user
        }});

        const updatedProduct= await Product.find({_id: productId})
        res.status(200).json({response: "Updated Product Details Successfully", data: updatedProduct});
    }
    catch{
        res.status(409).json({response: "Failed to Update Product Details", data: [], error: err});
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
        res.status(409).json({response: "Failed to Add", data: [], error: err})
    }
}

export const deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    try{
        await Product.remove({_id: productId});
        res.status(200).json({response: "Successfully Delete"});
    }
    catch{
        res.status(409).json({response: "Failed to Delete", error: err});
    }
}

export default addProduct;