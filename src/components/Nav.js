import React from "react";
import piggy from "../assets/porco.png";

// add filter and sort props from App.js to function the updates when toggle
const Nav = ({toggleFilter, toggleSort}) => {
	return (
		<div className="navWrapper">
			{/* add  options to give a sort function */}
			<select onChange={ e => toggleSort( e.target.value ) }>
				<option></option>
				<option value='name'>Name</option>
				<option value='weight'>Weight</option>
			</select>
			<span className="headerText">HogWild</span>
			{/* add click event */}
			<div  onClick ={toggleFilter} className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
		</div>
	);
};

export default Nav;
