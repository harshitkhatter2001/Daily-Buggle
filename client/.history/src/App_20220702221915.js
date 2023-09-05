import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter , Routes, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

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
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />

          <Routes>
            <Route exact path="/" element=
            {  <News
                setProgress={this.setProgress}
                category="general"
                key="general"
                pageSize={6}
                country="in"
                
              />} />
        
            <Route exact path="/business" element=
              {<News
                setProgress={this.setProgress}
                category="business"
                key="business"
                pageSize={6}
                country="in"
             
              />} />
        
            <Route exact path="/entertainment" element=
             { <News
                setProgress={this.setProgress}
                category="entertainment"
                key="entertainment"
                pageSize={6}
                country="in"
              
              />} />
           
            <Route exact path="/general" element=
           {   <News
                setProgress={this.setProgress}
                category="general"
                key="general"
                pageSize={6}
                country="in"
              
              />} />
          
            <Route exact path="/health" element =
           {   <News
                setProgress={this.setProgress}
                category="health"
                key="health"
                pageSize={6}
                country="in"
              />}/>
         
            <Route exact path="/science" element=
           {   <News
                setProgress={this.setProgress}
                category="science"
                key="science"
                pageSize={6}
                country="in"
               
              />} />
           
            <Route exact path="/sports" element=
           {   <News
                setProgress={this.setProgress}
                category="sports"
                key="sports"
                pageSize={6}
                country="in"
             
              />} />
            
            <Route exact path="/technology" element=
            {  <News
                setProgress={this.setProgress}
                category="technology"
                key="technology"
                pageSize={6}
                country="in"
             
              />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
