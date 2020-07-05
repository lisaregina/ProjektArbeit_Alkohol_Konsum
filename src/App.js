import React from 'react'
import './App.css';
import {DrinksProvider} from './drinks-context';
import dummy from "./dummy"

function App() {
  return (
    
    <div className="App">
      <header> <DrinksProvider> <dummy/> </DrinksProvider> </header>
      <h1>Tabelle</h1>
    </div>
  );

}

export default App;
