import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/alert';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState(light);
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message)=>{
    setAlert({
      msg: message,
    
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }
  
  const toggleMode = ()=>{
    if(mode = 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled");
    }
  }
 
    return (
      <div>
        <Router>
        <Navbar /> 
        <Alert alert = {alert}/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress}  key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;