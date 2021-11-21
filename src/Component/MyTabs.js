
import React from "react";

export class MyTabs extends React.Component {

  constructor(props) {
      super(props);
      this.state = {click: false};
  }

  render () {
      return (
        <div id={this.props.id}>
        {this.props.children}
      </div>
       )  
  }
};

