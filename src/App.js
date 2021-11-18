import renderer from "./API/RenderFunctions";


var componentList = require('./API/ComponentList')
var farseComponentObjectToList = Object.entries(componentList.simulation)

console.log(farseComponentObjectToList)

function App() {
  return (
    <div>
      <h1>pp</h1>
      {renderer(componentList.simulation)}
      <h1>pp</h1>
    </div>
  );
}

export default App;
