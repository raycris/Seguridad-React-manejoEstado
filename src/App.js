import "./App.css";

import { UseState } from "./UseState.js";
// import { ClassState } from "./ClassState.js";
import { UseReducer } from "./UseReducer.js";

function App() {
  return (
    <div className="App">
      <UseState name={"UseState"} />
      {/* <ClassState name="Class State" /> */}
      <UseReducer name="Use Reducer" />
    </div>
  );
}

export default App;
