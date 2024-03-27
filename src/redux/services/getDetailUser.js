import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailUser = createAsyncThunk(
  "users/getUserDetail",
  async (userId) => {
    const response = await axios.get(
      `https://6603d86e2393662c31cfd8b6.mockapi.io/users/${userId}`
    );
    return response.data;
  }
);
