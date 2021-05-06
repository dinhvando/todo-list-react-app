import React, { useState, useEffect } from "react";
import './App.css';
// Importinmg Components
import { Form } from './Components/Form.js';
import { TodoList } from './Components/TodoList.js'
function App() {

  useEffect(() => {
    getLocalTodos()
  },[])
  // USE STATE
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
    // USE EFFECT
    useEffect(() => {
      filteredHandler();
      saveLocalStorage()
    }, [todos,status])
  const filteredHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }
  const saveLocalStorage = () => {
    if(localStorage.getItem('todos') === null)
      localStorage.setItem("todos", JSON.stringify([]))
    else 
      localStorage.setItem("todos", JSON.stringify(todos))  
  }
  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos') === null)
      localStorage.setItem("todos", JSON.stringify([]))
    else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos)
    }
      
  }
  return (
    <div className="App">
      <header>
        <h1>My TODO LIST</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
