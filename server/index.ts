

const express = require('express')
const app = express()
const cors = require('cors')
const pool = require("./db.ts");


app.use(cors())
app.use(express.json()) // allows to use req.body


// ROUTES // PUT, GET, DELETE, EDIT

// Create a todo
app.post("/todos", async (req: any, res: any) => {
  try {
    const { description } = req.body
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description])
    res.json(newTodo.rows[0])
  } catch (err: any) {
    console.error(err.message)
  }
})

// Get all todos
app.get("/todos", async (req: any, res: any) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo")
    res.json(allTodos.rows)
  } catch (err: any) {
    console.error(err.message)
  }
}) 

// Get a todo
app.get("/todos/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params
    const todo = await pool.query("SELECT * FROM todo WHERE tid = $1", [id])
    res.json(todo.rows[0])
  } catch (err: any) {
    console.error(err.message)
  }
})

// Update a todo
app.put("/todos/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params
    const { description } = req.body
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE tid = $2",
      [description, id]
    )
    res.json("Todo was updated")
  } catch (err: any) {
    console.error(err.message)
  }
})

// Delete a todo
app.delete("/todos/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params
    const deleteTodo = await pool.query("DELETE FROM todo WHERE tid = $1", [
      id,
    ])
    res.json("Todo was deleted")
  } catch (err: any) {
    console.error(err.message)
  }
})
  

app.listen(5001, () => {
  console.log('Server is running on port 5001')
})


