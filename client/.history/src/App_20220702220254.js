import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
       
      </div>
    );
  }
}
