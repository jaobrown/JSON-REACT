import React from "react";
import ReactDOM from "react-dom";
import Albums from "./Albums";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Albums />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
