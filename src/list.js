import React from "react";
import Todo from "./todo";

const List = ({todos, setTodos}) => {
    return (
        <div className="todo-box">     
            <ul className="todo-list">
                {todos.map(item => (
                    <Todo 
                        text={item.text} 
                        key={item.index} 
                        todos={todos} 
                        todo = {item}
                        setTodos={setTodos}
                    />
                ) )}
            </ul>
        </div>
    )
}

export default List;