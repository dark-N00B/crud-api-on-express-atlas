import Product from '../server/db_schema.js';






const deleteProduct = async (req, res) => {
    const productId = req.params.productId;
    try{
        await Product.remove({_id: productId});
        res.status(200).json({response: "Successfully Delete"});
    }
    catch{
        res.status(409).json({response: "Failed to Delete", error: err});
    }
}

export default deleteProduct;