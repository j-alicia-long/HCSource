import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import InputPanel from "./InputPanel";
import ListDisplay from "./ListDisplay";

class App extends Component {
  state = {
    name: "Jennifer",
    list: []
  };

  addToList = (item) => {
    //deep copy list
    var newList = Object.assign([], this.state.list);
    newList.push(item);
    // list.concat(item) also deep copys
    this.setState({
      list: newList
    });
  };

  componentDidMount(){
    console.log("I got rendered!");
    // fetch("https://catfact.ninja/fact?maxlength=140").then(response => response.json())
    //   .then(
    //     res => this.setState({
    //       data: res
    //     })
    //   );
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
        <InputPanel updateList={this.addToList}/>

        <ListDisplay todos={this.state.list}/>
      </div>
    );
  }
}

export default App;
