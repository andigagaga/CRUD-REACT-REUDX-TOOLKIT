import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "./services/createUser";
import { deleteUser } from "./services/deleteUser";
import { getDetailUser } from "./services/getDetailUser";
import { getUsers } from "./services/getUsers";
import { editUser } from "./services/editUser";

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
        },
        editUserSucceess: (state, action) => {
            const editUserIndex = state.users.findIndex(user => user.id === action.payload.id)
            if(editUserIndex !== -1) {
                state.users[editUserIndex] = action.payload;
            }
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
            .addCase(createUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createUser.fulfilled, (state,action) => {
                state.status = 'succeeded';
                state.users.push(action.payload)
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
            .addCase(editUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
                state.selectedDetailUser = null;
                state.total = state.users.length;
            })
            .addCase(editUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase("users/clearDetailUser", (state) => {
                state.selectedDetailUser = null;
            })
    }
});

export const {clearDetailUser} = userSlice.actions;

export default userSlice.reducer;
