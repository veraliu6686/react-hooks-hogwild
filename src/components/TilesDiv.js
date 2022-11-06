import Tile from "./Tile"

// take the jsx from one single tile and map from the hogs array to display all the hogs


//take the hogs array from App.js (the parent component) where the data imported
const TilesDiv = ({hogs}) =>{
    const hogsToDisplay = hogs.map( hog=>{
       return (
        // must have a unique key for each, and pass down the hog objects to each tile
        <Tile key = {hog.name} hog={hog}/>
        )
    })

    return (
        <div className="ui grid container">
            {hogsToDisplay}
        </div>
    )

}

export default TilesDiv
