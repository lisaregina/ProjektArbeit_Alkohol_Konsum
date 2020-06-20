import React from 'react';
import axios from 'axios';  //npm add axios

const url = 'https://github.com/fivethirtyeight/data/blob/master/alcohol-consumption/drinks.csv';

function GetData(){
    axios.get(url)
    .then(response =>response.data)
    .then(data =>{
        function convertToArray(data, separator = ";") {
   
                document.getComponentById(data, function(fileContent){
                    
                     var resultArray = [];
                     var textArray = fileContent.split(/(\r\n|\n|\r)/gm);
                     for (var i = 0; i < textArray.length; i++) {
                
                         if (textArray[i].length > 1) {
                             var elementArray = textArray[i].split(separator);
                             elementArray.splice(elementArray.length - 1, 1);
                             resultArray.push(elementArray);
                         } 
                     } 
                     console.log(resultArray);
                     return(resultArray);
                 }); 
             } 

    })

    return(
        <div>
            <h1>Data</h1>
        </div>
       
    )
}
export default GetData