import ReactDOM from 'react-dom';
import parse from 'csv-parse/lib/sync'
import React, { createContext, useState, useEffect } from 'react'


export function loadDrinksData(){
    return fetch("/drinks.csv")
        .then((response) => response.text())
        .then((text) => parse(text, {columns: true}))
}

export const drinksContext = createContext()

// export function DrinksProvider(props){
// //     const[getDrinksData, setDrinksData] = useState(expect(data).toEqual(data)) 

// //     useEffect(()=>{
// //             loadDrinksData().then((country) =>{
// //                 setDrinksData(country)
// //             })
// //     })
// //     return(
        
// //             <drinksContext.Provider value ={[getDrinksData, setDrinksData]}>
// //                 {props.children}
// //             </drinksContext.Provider>
// //         )
//  }
