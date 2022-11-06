
// give details to the tile
function HogDetail({hog}){
    return (
        <div>
           <h3>{ hog.specialty }</h3>
            <div>Weight: { hog.weight } kilos</div>
            <h4>{ hog["highest medal achieved"] } medal achieved</h4>
            {hog.greased ? <h4>GET SOME FUN!!!</h4> : <h4>Not Greased!</h4>}
        </div>
    )
}

export default HogDetail;
