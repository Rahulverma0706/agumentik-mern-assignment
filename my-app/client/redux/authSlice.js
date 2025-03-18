import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Login
export const loginUser = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem("userToken", response.data.token);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Register
export const registerUser = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
