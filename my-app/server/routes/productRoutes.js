import express from "express";
import Product from "../model/Product.js";  // Assuming you have a product model
import authMiddleware from "../middleware/authMiddleware.js"; // Auth middleware
const router = express.Router();

router.get("/products", authMiddleware, async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

export default router;
