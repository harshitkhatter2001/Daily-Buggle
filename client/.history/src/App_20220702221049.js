import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export defaultz class App extends Component {
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />

          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                category="general"
                key="general"
                pageSize={6}
                country="in"
                
              />
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                category="business"
                key="business"
                pageSize={6}
                country="in"
             
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                category="entertainment"
                key="entertainment"
                pageSize={6}
                country="in"
              
              />
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                category="general"
                key="general"
                pageSize={6}
                country="in"
             
              />
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                category="health"
                key="health"
                pageSize={6}
                country="in"
               
              />
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                category="science"
                key="science"
                pageSize={6}
                country="in"
               
              />
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                category="sports"
                key="sports"
                pageSize={6}
                country="in"
             
              />
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                category="technology"
                key="technology"
                pageSize={6}
                country="in"
             
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
