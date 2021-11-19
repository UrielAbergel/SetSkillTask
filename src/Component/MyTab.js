import { useState } from "react";

export const MyTab = ({ title, style, id, children }) => {

  const [inputText, SetText] = useState('')

  const handleTextForGood = (text) => {
    SetText(text)
  }
    return (
      <div id={id} style={style}>
        <h1>{title}</h1>    
        {children}
      </div>
    );
  };