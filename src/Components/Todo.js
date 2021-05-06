import React from "react"

export const Todo = ({text,todo,todos,setTodos}) => {
    const deleteHandler = () =>{
        setTodos(todos.filter((el)=> el.id !== todo.id))
        console.log(todo)
    }

    const completeHandler = () =>{
        
        setTodos(todos.map((item)=>{
            if(todo.id === item.id)
            {
                return{
                    ...item,
                    completed: !item.completed
                }
               
            }
            return item;
        }))
        console.log(todo);
      
    }
    return(

        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}> {text} </li>
            <button onClick={completeHandler} className="complete-btn">
               {todo.completed ? <i className="fas fa-check"></i> : <i class="far fa-window-close"></i>}
            </button>
            
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
           
        </div>
    )
}

