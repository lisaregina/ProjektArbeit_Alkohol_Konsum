import React from 'react'
import './App.css';
import logo from './logo.svg';

import Dummy from "./dummy";
import { render } from 'react-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to React </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
           <Dummy/> 
        
         </header>
      {/* <h1>Data</h1> */}
      {/* <GetData></GetData> */}
    </div>
  );
}

export default App;
