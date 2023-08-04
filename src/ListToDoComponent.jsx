import React, { useEffect, useState } from 'react'
import { getAllTodos } from './services/TodoService';

const ListToDoComponent = () => {

    const [todos, setTodos] = useState([]);

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
  return (
    <div className='container'>
        <h2 className='text-center'>List of ToDos</h2>
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