import express from 'express';
import User from '../model/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();  // Load environment variables

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET; // Read secret from .env

// Register User
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(201).json({
            user: { id: user._id, name: user.name, email: user.email },
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Login User
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1d' });

        res.json({ 
            token, 
            user: { id: user._id, name: user.name, email: user.email } 
        });

    } catch (error) {
        res.status(500).json({ error: "Login failed" });
    }
});

export default router;
