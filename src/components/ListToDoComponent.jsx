import React, { useEffect, useState } from 'react'
import { getAllTodos } from '../services/TodoService';
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
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map(todo => 
                            <tr key = {todo.id}>
                                <td>{todo.title}</td>
                                <td>{todo.description}</td>
                                <td>{todo.completed ? "YES" : "NO"}</td>
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