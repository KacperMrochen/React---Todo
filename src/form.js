import React from "react";

const Form = ({setUserInput, userInput,setTodos,todos}) => {

    

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
        
        /*
        const year = Date.getFullYear();
        const month = Date.getMonth();
        const day = Date.getDate();
        const hour = Date.getHours();
        const minute = Date.getMinutes();

        let date = `${hour}:${minute}, ${day}-${month}-${year}`;
        */
        
        if(userInput!=="") {
            setTodos([...todos, {index: Math.floor(Math.random()*1000), text: userInput, isDone: false}]);
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
        </div>
    )
}

export default Form;
