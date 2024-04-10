import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUser = createAsyncThunk("user/deleteUser", async (userId) => {
    const response = await axios.delete(`https://66169209ed6b8fa43480cf0e.mockapi.io/users/${userId}`);
    return response.data
})