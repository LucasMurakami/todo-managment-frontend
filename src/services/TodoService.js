import axios from "axios"

const BASE_REST_API_URL = 'https://todo-managment-backend-fffdfbd8cb2d.herokuapp.com/';

export const getAllTodos = () => axios.get(BASE_REST_API_URL);

export const getTodo = (id) => axios.get(BASE_REST_API_URL + '/' + id); 

export const saveTodo = (todo) => axios.post(BASE_REST_API_URL, todo);

export const updateTodo = (id, todo) => axios.put(BASE_REST_API_URL + '/' + id, todo);

export const deleteTodo = (id) => axios.delete(BASE_REST_API_URL + '/' + id);

export const completeTodo = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/complete');

export const incompleteTodo = (id) => axios.patch(BASE_REST_API_URL + '/' + id + '/incomplete');