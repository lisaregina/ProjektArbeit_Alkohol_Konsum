import React from 'react';

function convertArray() {

data = ["Afghanistan,0,0,0,0.0 Albania,89,132,54,4.9 Algeria,25,0,14,0.7"];


    document.getComponentById(function(fileContent){
        
         var resultArray = [];

         var newLineArray = fileContent.map(elem => fileContent.split('')); //umändern zu '\n', wenn test funktioniert
         
         var splitArray = newLineArray.map(elem => {
            for (var i = 0; i < newLineArray.length; i++) {
                 newLineArray[i].split(",");
                
         } })
         console.log(splitArray);
         
     }); 
}


  return(
    <p>data</p>
  )

export default convertArray;