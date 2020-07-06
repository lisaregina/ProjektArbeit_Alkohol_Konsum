import React from 'react'
import './App.css';
import logo from './logo.svg';
import {DrinksProvider} from './drinks-context';
import dummy from "./dummy";
import { render } from 'react-dom';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <header className="App-header">
        <img src={logo} calssName="App-logo" alt="logo"/>
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

         <DrinksProvider> <dummy/> </DrinksProvider> 
        

         </header>
=======
      <h1>Data</h1>
      <GetData></GetData>
>>>>>>> dc3bb91e1d5dd2d018bba01808b8636bdb3ccc7e
    </div>
  );
}

export default App;
