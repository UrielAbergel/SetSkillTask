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
      {renderer(componentList.simulation, {handlePassTextFromInputToState})}
    </div>
  );


  
}

export default App;
