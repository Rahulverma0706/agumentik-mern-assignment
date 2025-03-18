import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch", async (_, { rejectWithValue }) => {
    try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get("http://localhost:5000/api/products", {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const productSlice = createSlice({
    name: "products",
    initialState: { products: [], loading: false, error: null },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => { state.loading = true; })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default productSlice.reducer;
