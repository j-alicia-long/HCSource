import React, { Component } from 'react';

class Form extends Component {
  render() {
  //<form onSubmit={props.loadWeather}>
    return (
      <div className="Form">
        <form>
          <input type="text" name="zip" placeholder="Zip Code..." />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}

export default Form;
