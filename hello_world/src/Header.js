import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {this.props.name}'s to-do list:
      </div>
    );
  }
}

export default Header;
