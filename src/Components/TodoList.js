import React from "react"
// Import Components
import {Todo} from './Todo.js'
export const TodoList = ({todos,setTodos,filteredTodos})=>{
    console.log(filteredTodos)
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo) => {
                return <Todo 
                    text ={todo.text}
                    key = {todo.id}
                    todos = {todos}
                    todo = {todo}
                    setTodos = {setTodos}
                />
            }

            )}
        </ul>
      </div>
    )
}