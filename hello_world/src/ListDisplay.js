import React, { Component } from 'react';
import './App.css';

class ListDisplay extends Component {
  render() {
    const { todos } = this.props;
    // same as: let todos = this.props.todos;

    return (
      <div className="ListDisplay">
        {todos.map((item, index) => {
          return(
            <ul key={index}>
              <li>{index}</li>
              <li>{item.task}</li>
              <li>{item.due}</li>
            </ul>
          )
        })}
      </div>
    );
  }
}

export default ListDisplay;
