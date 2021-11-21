
import React from 'react'
import './MyButton.css'

 export class MyButton extends React.Component {

    handleClick(click) {
        var outputText = document.getElementById(click.source_id).value
        console.log(outputText)
        document.getElementById(click.target_id).innerHTML = outputText
        document.getElementById(click.source_id).value = ''
    }


    render () {
        return ( <a href="#" class="myButton"  onClick={() => this.handleClick(this.props.click)}>{this.props.text}</a>)  
    }
  };

