import React from 'react';


export const Form = ({inputText,setInputText,todos,setTodos,setStatus})=>{
    // Here I can write javascript code and function
    const inputTexthandler = (e) => {
        setInputText(e.target.value)
        return e.target.value
    }
    const summitTodohandler = (e) =>{
        e.preventDefault();
        if(inputText.trim() !== "")
        {
            if(todos.some((value) => value.text === inputText.trim()))
            {
                alert("Bị trùng")
                return;
            }
            setTodos([
                ...todos,{ text: inputText, completed: false, id: Math.random() * 1000 } 
            ])
            setInputText("");
           
        }
        
        else 
            alert("Please enter work before summit")
    }
    const statusHandler = (e)=>{
        setStatus(e.target.value)
    }
    return(
        <form>
        <input value = {inputText} onChange={inputTexthandler} type="text" className="todo-input" placeholder="Enter work"/>
        <button onClick={summitTodohandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}


