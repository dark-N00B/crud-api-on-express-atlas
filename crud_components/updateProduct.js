import Product from '../server/db_schema.js';






const updateProduct = async (req, res) => {
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

export default updateProduct;