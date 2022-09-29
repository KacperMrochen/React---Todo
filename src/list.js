import React from "react";
import Todo from "./todo";
const List = ({todos}) => {
    return (
        <ul>
            <Todo todos={todos}></Todo>
        </ul>
    )
}

export default List;