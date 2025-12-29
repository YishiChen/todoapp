import './App.css';
import React from 'react';

// components
import InputTodo from './Components/InputTodo'
import ListTodos from './Components/ListTodos';

function App() {
  return (
    <>
    <div className="container">
    <InputTodo />
    <ListTodos />
    </div>
    </>
  )
}

export default App;
