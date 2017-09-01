import React, { Component } from "react";
import "./App.css";

import Heroes from "./components/Heroes";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Heroes</h1>
        <div className="header-bar" />
        <app-heroes />
        <Heroes />
      </div>
    );
  }
}

export default App;
