import React from 'react'
import './App.css';
import logo from './logo.svg';
import { render } from 'react-dom'; 

// components
import ChartJsTest from './ChartJsTest';
import Dummy from "./dummy";
import Avg from './avg';
// import MyChart  from './myChart'


function App() {
  return (
    <div>
           <Dummy/>
           {/* <MyChart/> */}
           <ChartJsTest/>
           <Avg />
    </div>
  );
}

export default App;
