import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apiKey ="42b05d5913aa4ad79ff3f3702c8f6d85"
  state = {
    progress : 0
  }
  setProgress = (progress) =>{
     this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
        />

          <Switch>
            <Switch>
              <Route exact path="/">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/business">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="business"
                  pageSize={6}
                  country="in"
                  category="business"
                />
              </Route>
              <Route exact path="/entertainment">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="entertainment"
                  pageSize={6}
                  country="in"
                  category="entertainment"
                />
              </Route>
              <Route exact path="/general">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="general"
                  pageSize={6}
                  country="in"
                  category="general"
                />
              </Route>
              <Route exact path="/health">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="health"
                  pageSize={6}
                  country="in"
                  category="health"
                />
              </Route>
              <Route exact path="/science">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="science"
                  pageSize={6}
                  country="in"
                  category="science"
                />
              </Route>
              <Route exact path="/sports">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/sports">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="sports"
                  pageSize={6}
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/technology">
                <News setProgress={this.setProgress} apiKey={this.apiKey} 
                  key="technology"
                  pageSize={6}
                  country="in"
                  category="technology"
                />
              </Route>
            </Switch>
          </Switch>
        </Router>
      </div>
    );
  }
}
