import axios from "axios";

import { loadingStarted, loadingCompleted, loadingFailed } from "./loadingSlice";
import { todosUpdate } from "./TodosSlice";

export const loadTodos = () => async (dispatch) =>{
    dispatch(loadingStarted());
    try {
        const response = await axios.get('/api/todos');
        const todos = response.data;
        console.log(todos);
        dispatch(loadingCompleted(todos));
    } catch (error) {
        loadingFailed(e);
    }
    
}

export const createTodo = (newTodoText) => async(dispatch, getState) =>{
    try {
        const response = await axios.post('/api/todos', {text: newTodoText});
        const newTodo = response.data;
        const updatedTodos = getState().todos.value.concat(newTodo);
        dispatch(todosUpdate(updatedTodos));
    } catch (error) {
        console.log(error);
    }
}

export const deleteTodo = (todoId) => async(dispatch, getState) =>{
    try {
        await axios.delete('/api/todos/'+todoId);
        const updatedTodos = getState().todos.value.filter(t=> t.id !== todoId);
        dispatch(todosUpdate(updatedTodos));
    } catch (error) {
        console.log(error);
    }
}

export const markTodoAsCompleted = (todo) => async(dispatch, getState) =>{
    try {
        const response = await axios.put('/api/todos/'+todo.id, { isCompleted: true});
        const updatedTodo = response.data; 
        const updatedTodos = getState().todos.value.map( t => t.id === todo.id ? updatedTodo : t);
        dispatch(todosUpdate(updatedTodos));
    } catch (error) {
        console.log(error);
    }
}