import React from 'react'
import './MyInput.css'

export class MyInput extends React.Component {

    render () {
        return ( 
        <div className='Input'>
        <input 
        id={this.props.id} 
        className='Input-text'
        placeholder={this.props.attributes.placeholder} 
        >
        </input>
        <label for="input" class="Input-label">{this.props.text}</label>      
         </div>  
        )  
    }
  };


