
import React from 'react';
import './Cell.css'

class Cell extends React.Component {
	getComponent(event){ 
		var r = Math.floor(Math.random() * (255+ 1)).toString();
		var g = Math.floor(Math.random() * (255+ 1)).toString();
		var b = Math.floor(Math.random() * (255+ 1)).toString();
		console.log('clicked');
		event.currentTarget.style.backgroundColor = 'rgb('+r+','+g + ',' + b + ')';
	}

	render(){
		return(
			<button className="cell" onClick={this.getComponent.bind(this)}></button>
			)
	}
	
}

export default Cell;