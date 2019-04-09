import React, { Component } from "react";
import ReactDOM from "react-dom";
import MapContainer from "./MapContainer";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <MapContainer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
