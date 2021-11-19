


export const MyButton = ({ text, style, id , click }) => {
  

    const handleClick = () => {
       var outputText = document.getElementById(click.source_id).value
       console.log(outputText)
       document.getElementById(click.target_id).innerHTML = outputText
       
       

    }

    return (
      <button id={id} onClick={handleClick}>
        {text}
      </button>
    );
  };