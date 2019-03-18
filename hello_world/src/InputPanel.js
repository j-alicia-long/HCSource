import React, { Component } from 'react';
import './App.css';

class InputPanel extends Component {
  state = {
    task: "",
    due: "",
  };

  buttonOnClick = () => {
    this.props.updateList(this.state);
    this.setState({
      task: "",
      due: ""
    });
  };

  updateTask = (newTask) => {
    this.setState({
      task: newTask
    });
  };
  updateDue = (dueDate) => {
    this.setState({
      due: dueDate
    });
  };

  render() {
    return (
      <div className="InputPanel">
        Task: <input type="text" value={this.state.task} onChange={(e)=>this.updateTask(e.target.value)}></input>
        Due Date: <input type="text" value={this.state.due} onChange={(e)=>this.updateDue(e.target.value)}></input>
        <button onClick={this.buttonOnClick}>+Add Task</button>
      </div>
    );
  }
}

export default InputPanel;
