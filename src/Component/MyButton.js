
import './MyButton.css'

export const MyButton = ({ text, style, id , click }) => {

    const handleClick = () => {
       var outputText = document.getElementById(click.source_id).value
       console.log(outputText)
       document.getElementById(click.target_id).innerHTML = outputText
       document.getElementById(click.source_id).value = ''
    }

    return (
        <a href="#" class="myButton" id={id} onClick={handleClick}>{text}</a>
    );
  };