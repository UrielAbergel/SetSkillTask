import './MyLabel.css'
import React from 'react'



  export class MyLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {click: false};
    }

    render () {
        return (
        <div>
            <h2 id={this.props.id} className='labelCenter'></h2>
            {this.props.children}
        </div>
      )  
    }
  };

