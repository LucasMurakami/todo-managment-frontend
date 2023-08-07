import axios from "axios"

const BASE_REST_API_URL = 'http://localhost:8080/api/todos';

export const getAllTodos = () => axios.get(BASE_REST_API_URL);

export const getTodo = (id) => axios.get(BASE_REST_API_URL + '/' + id); 

export const saveTodo = (todo) => axios.post(BASE_REST_API_URL, todo);