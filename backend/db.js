import mongoose from 'mongoose';

const Product = new mongoose.Schema({
    product_name: String,
    product_description: String,
    product_quantity: Number,
    user: String
});



export default mongoose.model("Product", Product);