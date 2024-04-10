import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(
    "https://66169209ed6b8fa43480cf0e.mockapi.io/users"
  );
  return response.data;
});
