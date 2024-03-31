import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editUser = createAsyncThunk("users/editUser", async ({ userId, userData }) => {
    try {
        const response = await axios.put(`https://6603d86e2393662c31cfd8b6.mockapi.io/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error("Error editing user:", error);
        throw error;
    }
});
