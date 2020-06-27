import React from 'react';


function GetData() {
  function componentDidMount(){
    return fetch('drinks.csv').then((response) =>{
      console.log(response); 
      return response;
                                
    })
  }

  // function Convert2Json(){
  //   let csvToJson = require('convert-csv-to-json');
  // }
  


  return(
    <p>data</p>
  )
}
export default GetData;


