import React, { useEffect, useState } from 'react'
import { completeTodo, deleteTodo, getAllTodos } from '../services/TodoService';
import { useNavigate } from 'react-router-dom';

const ListToDoComponent = () => {

    const [todos, setTodos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        listTodos();
    }, [])

    function listTodos() {
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewTodo() {
        navigate('add-todo');
    }

    function updateTodo(id) {
        console.log(id);
        navigate(`update-todo/${id}`);
    }

    function removeTodo(id) {
        deleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }

    function markCompleteTodo(id) {
        completeTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of ToDos</h2>
        <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add ToDo</button>
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ToDo Title</th>
                        <th>ToDo Description</th>
                        <th>ToDo Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => 
                            <tr key = {todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? "YES" : "NO"}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                    <button className='btn btn-danger' onClick={() => removeTodo(todo.id)} style={{marginLeft: "10px"}}>Delete</button>
                                    <button className='btn btn-success' onClick={() => markCompleteTodo(todo.id)} style={{marginLeft: "10px"}}>Completed</button>
                                </td>
                            </tr>
                        )
                    }                    
                </tbody>
            </table>
        </div>
    </div>
  )
}


export default ListToDoComponent