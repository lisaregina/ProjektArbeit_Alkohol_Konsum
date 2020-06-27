import React from 'react';

function GetData() {

  function componentDidMount(){

    var csvToJson = require('convert-csv-to-json'); //library CSVtoJSON

    return fetch('drinks.csv').then((response) =>{
      console.log(response); 
      return response;
                                
    })
    .then(data =>{
      var fileInputName = data;
      var fileOutputName = 'drinks.json';

      csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);
      console.log(fileOutputName);
      return fileOutputName;
    })
  }

  
  


  return(
    <p>data</p>
  )
}
export default GetData;


