import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

function GetData() {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      dataItems: []
    }
  }

  async function componentDidMount() {

    const response = await fetch('drinks.csv')
      .then(result => result.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          dataItems: json,
        })
      })


  }

  return (
   // if ({ isLoaded, dataItems } = this.state) {
    <p>Daten</p> //Damit kein Error wegen nichts rendern kommt
      <ul>
        {dataItems.map(items => (
          <li>{dataItems.country}</li>
          <li>{dataItems.beer}</li>
          <li>{dataItems.spirit}</li>
          <li>{dataItems.wine}</li>
          <li>{dataItems.total}</li>
        ))};
      </ul>
    // } else {
    //   console.log("ERROR")
    // }
  )
}

export default GetData;


