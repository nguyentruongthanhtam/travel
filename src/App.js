import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
        <div className="name">
          <h1>Santorini</h1>
          <h3>2/2018</h3>
        </div>
        <div className="decors">
          <div className="square1"></div>
          <div className="square2"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
