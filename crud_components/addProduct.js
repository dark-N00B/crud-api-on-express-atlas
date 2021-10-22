import Product from '../server/db_schema.js';





const addProduct = async (req, res) => {
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

export default addProduct;