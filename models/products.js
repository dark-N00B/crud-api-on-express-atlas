import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    product_name: String,
    product_description: String,
    product_quantity: Number,
    user: String
});



export default mongoose.model("Product", productSchema);