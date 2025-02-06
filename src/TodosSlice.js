import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        value: [
            { text: 'Go to the store', isCompleted: true },
            { text: 'New todo', isCompleted: false }
        ]
    },
    reducers: {
        createTodo: (state,action) => {
            state.value.push({ text: action.payload, isCompleted: false});
        },
        markTodoAsCompleted: (state, action) => {
            const text = action.payload;
            const todo = state.value.find(t => t.text === text);
            if (todo) todo.isCompleted = true;
        },
        deleteTodo: (state, action) => {
            const text = action.payload;
            state.value = state.value.filter(t => t.text !== text);
        },
    }
});

export const { createTodo, markTodoAsCompleted, deleteTodo } = todosSlice.actions;