import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(
    "https://6603d86e2393662c31cfd8b6.mockapi.io/users"
  );
  return response.data;
});
