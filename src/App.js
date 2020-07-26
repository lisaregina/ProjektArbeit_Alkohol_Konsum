import React from 'react'
import './App.css';
import logo from './logo.svg';
import MyChart  from './myChart'
import Dummy from "./dummy";
import { render } from 'react-dom'; //funktioniert nicht?
import ChartJsTest from './ChartJsTest';


function App() {
  return (
    <div>
           <Dummy/>
           {/* <MyChart/> */}
           <ChartJsTest/>

    </div>
  );
}

export default App;
