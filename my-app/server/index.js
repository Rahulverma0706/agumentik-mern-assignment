import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js'
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend Vite requests
    credentials: true,
  }));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use("/api", productRoutes); 
app.listen(5000, () => console.log("Server running on port 5000"));
