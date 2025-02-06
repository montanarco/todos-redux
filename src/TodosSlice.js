import { createSlice } from "@reduxjs/toolkit";

import { loadingCompleted } from "./loadingSlice";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: []
    },
    reducers: {
        todosUpdate: (state, action) =>{
            const updateTodos = action.payload;
            state.value = updateTodos;
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(loadingCompleted, (state, action)=>{
            state.value = action.payload;
        });
    }
});

export const { todosUpdate } = todosSlice.actions;