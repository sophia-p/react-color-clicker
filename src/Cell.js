
import React from 'react';
import './Cell.css'

class Cell extends React.Component {
	constructor() {
		super();
		this._handleClick = this._handleClick(this);
	}
	render() {
		return (
			<button className="cell" onClick={this._handleClick}>		
			</button>
		);
	}
	_handleClick(){
		console.log(this)
	}
}

export default Cell;