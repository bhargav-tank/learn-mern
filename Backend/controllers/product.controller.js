import Product from '../models/product.model.js';
import mongoose from 'mongoose';

// Create Product
export const createProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ message: "Please provide all fields", success: false });
    }

    try {
        const existingProduct = await Product.findOne({ name: product.name });
        if (existingProduct) {
            return res.status(400).json({ message: "Product name must be unique", success: false });
        }
        const newProduct = new Product(product);
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.error('Error in Create Product:', error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Get All Products
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.error('Fetching error:', error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Update Product
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid product ID", success: false });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error('Update error:', error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// Delete Product
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid product ID", success: false });
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        console.error('Error in Delete Product:', error.message);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
