import React, { Component } from "react";

export default class additem extends Component {
  
 
  
  render() {
    return (
      <div>
        <label htmlFor="kenan">增加</label>
        <input
          id="kenan"
          type="text"
          onChange={this.props.inputChange}
          value={this.props.inputValue}
          ref={(input) => {
            this.props.input = input;
          }}
        />
       
        <button onClick={this.props.addList}>增加</button>
      </div>
    );
  }
}
