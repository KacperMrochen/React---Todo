import React from "react";
import { useState } from "react";

import List from './list';

const Form = ({setUserInput, userInput}) => {

    const [todos, setTodos] = useState([]);

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
        
        /*const year = Date.getFullYear();
        const month = Date.getMonth();
        const day = Date.getDate();
        const hour = Date.getHours();
        const minute = Date.getMinutes();

        let date = `${hour}:${minute}, ${day}-${month}-${year}`;*/
        
        if(userInput!=="") {
            setTodos([...todos, {text: userInput}]);
            setUserInput("");
            e.preventDefault();
        }else {
            e.preventDefault();
            return false;
        }
    }

    return (
        <div>
            <form>
                <h2>What is your task?</h2>
                <input 
                    className="textInput" 
                    onChange={handleUserInput} 
                    value={userInput}
                />
                <button 
                    type="submit" 
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </form>
            <List todos={todos}/>
        </div>
    )
}

export default Form;
