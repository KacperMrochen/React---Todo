import React from "react";

const Todo = ({todos}) => {
    
    return (
        <div>{todos.map(item => <li key={Math.random()*1000}>{item.text}</li>)}</div>
    )
}

export default Todo;