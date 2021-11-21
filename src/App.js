import renderer from "./API/RenderFunctions";
import React from "react";

var componentList = require('./API/ComponentJSON')

function App() {

  return (
    <div>
      {renderer(componentList.simulation)}
    </div>
  );
}
export default App;
