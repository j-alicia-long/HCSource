import React, { Component } from 'react';
import './App.css';
import Titles from "./titles";
import Form from "./form";
import Weather from "./weather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
