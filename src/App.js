import React, { Component } from 'react';
import './App.css';
import Cell from './Cell.js';

class App extends Component {

  render() {
    return (
 	<div className="grid">
    <Cell />
    <Cell />
    <Cell />
    </div>
    );
  }
}

export default App;
