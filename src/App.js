
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');// stats of mode it like flag
  const toggleMode=()=>
  {
    if(mode==="dark")
    {
      setMode("light")
      document.body.style.backgroundColor='white';
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor='black';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <TextForm heading="Enter the text to analysis" mode={mode}/>
          </Route>
          
          
        </Switch>
        </div> 
    </Router>

    </>
  );
}

export default App;
