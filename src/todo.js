import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    
    const checkItemHandler = () => {
        setTodos(todos.map((item) => {
                if(todo.index === item.index) { 
                    return {...todo, isDone: true, text: <s>{text}</s>};
                }
                return item;
            })
        );
    }

    const removeItemHandler = () => {
        setTodos(todos.filter(element => element.index !== todo.index));
    } 
    
    return (
        <div className="todo">
            <li className="list-item">{text}</li>
            <button className="complete-btn" onClick = {checkItemHandler}>Done</button>
            <button className="delete-btn" onClick = {removeItemHandler}>Remove</button>
        </div>
    )
}

export default Todo;