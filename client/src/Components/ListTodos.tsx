import React from "react";
import { useState, useEffect } from "react";

import EditTodo from "./EditTodo";


const ListTodos = () => {

    const [todos, setTodos] = useState<Array<{ tid: number; description: string }>>([])

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5001/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err: any) {
            console.error(err.message);
        }  
    }
    
    useEffect(() => {
        getTodos();
    }, []);

    const deleteTodo = async (tid: number) => {
        try {
            await fetch(`http://localhost:5001/todos/${tid}`, {
                method: "DELETE"
            });
            setTodos(todos.filter(todo => todo.tid !== tid));
        } catch (err: any) {
            console.error(err.message);
        }    
    }

    return (
    <>
        <table className="table mt-5" >
            <thead>
                <tr>
                <th>Task ID</th>
                <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => ( 
                    <tr key={todo.tid}>
                        <td>{todo.tid}</td>
                        <td>{todo.description}</td>
                        <td>
                            <EditTodo todo={todo} />
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => deleteTodo(todo.tid)}
                            >
                            Delete
                            </button>
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </>
    
    )
}

export default ListTodos