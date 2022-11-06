import { useState } from "react"
import HogDetail from "./HogDetail"
//render each tile


// create a tile with name and image
const NameAndImg = ({name, image})=>{
    return (
        <div>
            <h3>{name}</h3>
            <img src = {image} alt = {name}/>
        </div>
    )
}


/////////////  render one single tile /////////////
const Tile = ({hog}) => {
    // use state to update the showing info
    // set initial state as false when the details are not showing on the tile
    const [showDetails, setShowDetails] = useState (false)

    const toggleDetails =()=>{
        // setfunction is not same as the variable --- not using " ==", cuz it's not mutating the original state
           setShowDetails (!showDetails)
    }

    return (
        // add a click event to allow the information change on the tile
        <div onClick = {toggleDetails} className="image pigTile ui four wide column">
           {
            showDetails ? // if the state is true , show detail, else show the name & image
            <HogDetail hog={hog} /> :
            <NameAndImg name = {hog.name} image = {hog.image}/>
           }
        </div>
    )
}

export default Tile
