import renderer from "./API/RenderFunctions";
import React, {useState} from "react";

var componentList = require('./API/ComponentList')


function App() {

  const [inputText, setInput] = useState('')

  const handlePassTextFromInputToState = (textFromInput) => {
    setInput(textFromInput)
  }

  const handleOnClickButton = () => {
    return inputText
  }

  return (
    <div>
      <h1>pp</h1>
      {renderer(componentList.simulation, {handlePassTextFromInputToState})}
      <h1>pp</h1>
    </div>
  );


  
}

export default App;
