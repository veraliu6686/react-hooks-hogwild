import hogs from "../porkers_data";

// console.log(hogs)

function Tile({name, image, hogs}) {
console.log(hogs)
    
const renderTiles = hogs.map(hog => {
    
    <div>
        <header>{hog.name}</header> 
        <img src={hog.image} alt={hog.name}/>
    </div>
    }
)


return (
    <div>
        {renderTiles}
    </div>
    );
}

export default Tile;

// function ProjectItem({ name, about, technologies }) {

//     const eachTechnology = technologies.map ( technology =>(
//       <span key = {technology}> {technology}</span>
//     ))
  
//     return (
//       <div className="project-item">
//         <h3>{name}</h3>
//         <p>{about}</p>
//         <div className="technologies">{ eachTechnology }</div>
//       </div>
//     );
//   }



// function ProjectList({ projects }) {
//     console.log(projects);
  
//     const RenderProjects = projects.map( (projectObj) =>(
//       <ProjectItem key = {projectObj.id} name= {projectObj.name} about = {projectObj.about} technologies = {projectObj.technologies} />
//     ))
  
//     return (
//       <div id="projects">
//         <h2>My Projects</h2>
//         <div id="project-list">{ RenderProjects }</div>
//       </div>
//     );
//   }