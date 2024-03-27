import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./services/getUsers";
import { deleteUser } from "./services/deleteUser";
import { getDetailUser } from "./services/getDetailUser";

const initialState = {
    users: [],
    total: 0,
    status: 'idle',
    error: null,
    selectedDetailUser: null
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearDetailUser: (state) => {
            state.selectedDetailUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload; // Menggunakan Immer untuk mengubah state
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(deleteUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = state.users.filter(user => user.id != action.payload.id )
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
            .addCase(getDetailUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.selectedDetailUser = action.payload
            })
            .addCase(getDetailUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
            .addCase("users/clearDetailUser", (state) => {
                state.selectedDetailUser = null;
            })
    }
});

export const {clearDetailUser} = userSlice.actions;

export default userSlice.reducer;
