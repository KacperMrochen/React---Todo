import './App.css';
//Importing Components
import Header from './header';
import Form from './form';
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState("");

  return (
    <div className="App">
      <Header />
      <Form setUserInput={setUserInput} userInput={userInput}/>
    </div>
  );
}

export default App;
