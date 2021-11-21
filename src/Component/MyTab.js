
import React from "react";

  export class MyTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};

        this.handleClick = this.handleClick.bind(this);

    }
    
    handleClick() {
      this.setState({
        open: !this.state.open
      });}

    render () {
        return (
          <div id={this.props.id}>
            <h1 onClick={() => this.handleClick(this.setState())}>{this.props.title}</h1> 
            {this.state.open ? this.props.children : null} 
          </div>
         )  
    }
  };
  
