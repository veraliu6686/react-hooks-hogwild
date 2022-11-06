import React,{useState} from "react";
import Nav from "./Nav";
import TilesDiv from "./TilesDiv";

import hogs from "../porkers_data";

function App() {

	const [ grease, setGrease ] = useState( false )

	const toggleFilter = () => {
		setGrease( !grease )
	}
	// when the hogs are greased, they will be filtered out
	const filteredHogs = grease ?
	hogs.filter( hog => {
		if( hog.greased === true){
			return true
		} else {
			return false
		}
	}) :
	hogs
	// hogsData.filter( hogObj => hogObj.greased ) : hogsData

	const [ sort, setSort ] = useState( '' )
	const toggleSort = sortValue => {
		setSort( sortValue )
	}
	// add sort to a copy of  the filtered tiles
	const sortedHogs = [ ...filteredHogs ].sort( (hogA, hogB) => {
		// compare two different objects and return -1 goes first
		switch( sort ) {
			case 'name' :
				if( hogA.name < hogB.name) {
					return -1
				} else {
					return 1
				}
			case 'weight':
				return hogA.weight - hogB.weight
			default:
				return 0
		}
	} )

	return (
		<div className="App">
			{/* click/change event to toggle functions */}
			<Nav toggleFilter= {toggleFilter} toggleSort={toggleSort}/>
			{/* filter and sort will pass down to the tiles functions */}
			<TilesDiv hogs = {sortedHogs} />
		</div>
	);
}

export default App;
