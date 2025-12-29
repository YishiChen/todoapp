import { useState } from "react"
import React from "react"

const InputTodo = () => {

    const [description, setDescription] = useState<string>("")

    const submitTask = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const body = { description };
            await fetch("http://localhost:5001/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location.href = "/";
        } catch (err: any) {
            console.error(err.message);
        }
    }

    return (
    <>
    <h1 className="mt-5 text-center">Input Todo</h1>
    <form className="form-inline mt-5 d-flex justify-content-center" onSubmit={submitTask}>
        <input type="text" className="form-control" placeholder="Add a new todo..." value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}></input>
        <button className="btn btn-primary">Add</button>
    </form>
    </>
    
    )
}

export default InputTodo
