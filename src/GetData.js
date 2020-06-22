import React from 'react';
import ReactDOM from 'react-dom';

function GetData() {
  function componentDidMount(){
    return fetch('drinks.csv').then((response) =>{
      return response;                            //Achtung Baustelle!!
    })
  }
  

  function makeTable(data) {

    document.getComponentById(data, function(fileContent){
        
         var resultArray = [];

         var newLineArray = fileContent.map(elem => fileContent.split('\n')); 
         
         var splitArray = newLineArray.map(elem => {
            for (var i = 0; i < newLineArray.length; i++) {
                 var noCommaArray = splitArray.map(elem => newLineArray[i].split(","));
                
         } })
         console.log(splitArray);
         
     }); 
  }
  return(
    <p>data</p>
  )
}
export default GetData;


