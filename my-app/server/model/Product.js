import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  Category: String,
  SubCategory: String,
  Product: String,
  SKU_ID: Number,
  Image: String,
  Brand: String,
  SKU_Name: String,
  SKU_Size: String,
  MRP: String,
  Selling_Price: String,
  Item_Link: String,
  In_Stock: String,
  Out_of_Stock: String
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
