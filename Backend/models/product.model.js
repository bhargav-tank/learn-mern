import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String,
        require: true
    }
}, {
    timestamps: true // Create and updated at male aa true hoi to
})

const Product = mongoose.model('Product', productSchema)

export default Product;