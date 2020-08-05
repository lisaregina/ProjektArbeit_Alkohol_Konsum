import React from 'react'
import './App.css';
import { render } from 'react-dom';

import ChartJsTest from './ChartJsTest';
import Dummy from "./dummy";
import Avg from './avg';

function App() {
  return (
    <div>
      <Dummy />
      <ChartJsTest />
      <Avg />
    </div>
  );
}

export default App;
