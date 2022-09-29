import './App.css';
//Importing Components
import Header from './header';
import Form from './form';
import List from './list';
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form setUserInput={setUserInput} userInput={userInput} setTodos={setTodos} todos={todos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
