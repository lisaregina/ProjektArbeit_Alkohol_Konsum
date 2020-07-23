import React from 'react'
import './App.css';
import logo from './logo.svg';
import MyChart  from './myChart'
import Dummy from "./dummy";
import { render } from 'react-dom';


function App() {
  return (
    <div>
           <Dummy/>
           <MyChart/>
    </div>
  );
}

export default App;
