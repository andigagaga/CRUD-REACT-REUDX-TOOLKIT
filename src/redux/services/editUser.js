import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editUser = createAsyncThunk("users/editUser", async ({ userId, userData }) => {
    try {
        const response = await axios.put(`https://66169209ed6b8fa43480cf0e.mockapi.io/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error editing user:", error);
        throw error;
    }
});
