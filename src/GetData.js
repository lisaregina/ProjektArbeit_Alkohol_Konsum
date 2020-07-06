import React, {useEffect} from 'react';



function GetData() {
 useEffect(() => {
    return fetch('drinks.csv').then((response) =>{
      console.log(response); 
      return response.text();
                                
    })
    .then((data) => {
      console.log('##########', data)
    })
  })

  return(
    <p>data</p>
  )
}
export default GetData;


