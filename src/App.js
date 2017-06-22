import React, { Component } from 'react';
import './App.css';
import Cell from './Cell.js';

class App extends Component {
	
	render() {
	
		return (

	    <div>
		 	<div className="grid">
			    {this.renderCell()}
			    {this.renderCell()}
			    {this.renderCell()}
		    </div>

	    </div>
    );
  }
}

export default App;
