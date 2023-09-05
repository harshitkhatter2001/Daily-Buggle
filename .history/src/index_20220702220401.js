import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //  <App />
     <BrowserRouter>
     <Navbar/>
     <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
       <Routes>
         <Route path="/" element={  <News
                setProgress={this.setProgress}
                category="general"
                key="general"
                pageSize={6}
                country="in"
                
              />} />
         <Route path="/business" element={    <News
                setProgress={this.setProgress}
                category="business"
                key="business"
                pageSize={6}
                country="in"
             
              />} />
         <Route path="/entertainment" element={  <News
                setProgress={this.setProgress}
                category="entertainment"
                key="entertainment"
                pageSize={6}
                country="in"
              
              />} />
         <Route path="/general" element={  <News
                setProgress={this.setProgress}
                category="general"
                key="general"
                pageSize={6}
                country="in"
             
              />} />
         <Route path="/health" element={ <News
                setProgress={this.setProgress}
                category="health"
                key="health"
                pageSize={6}
                country="in"
               
              />} />
         <Route path="/science" element={   <News
                setProgress={this.setProgress}
                category="science"
                key="science"
                pageSize={6}
                country="in"
               
              />} />
         <Route path="/sports" element={   <News
                setProgress={this.setProgress}
                category="sports"
                key="sports"
                pageSize={6}
                country="in"
             
              />} />
         <Route path="/technology" element={   <News
                setProgress={this.setProgress}
                category="technology"
                key="technology"
                pageSize={6}
                country="in"
             
              />} />
     
       </Routes>
     </BrowserRouter>    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
