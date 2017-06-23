import React, { Component } from 'react';
import './App.css';
import Cell from './Cell.js';

class App extends Component {
	
	render() {
	
		return (

	    <div>
	    	<h3>Undrab the squares by clicking</h3>
		 	<div className="grid">
			    <Cell/>
			    <Cell/>
			    <Cell/>
		    </div>

		    <div className="grid">
			    <Cell/>
			    <Cell/>
			    <Cell/>
		    </div>

		    <div className="grid">
			    <Cell/>
			    <Cell/>
			    <Cell/>
		    </div>

	    </div>
    );
  }
}

export default App;
