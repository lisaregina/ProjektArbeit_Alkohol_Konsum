import React, { useEffect, useState } from 'react'
import { drinksContext } from "./drinks-context"
import loaddrinksData from './drinks-context/load-drink-data'
import App from './App'

export default function Main() {                     //so wenig wie möglich reinschreiben! Sehr gefährlich!
    const [drinksData, setdrinksData] = useState([])

    useEffect(() => {
        if (!drinksData || drinksData.length === 0) {
            loaddrinksData()
                .then((json) => {
                    setdrinksData(json)
                })
                .catch((err) => {
                    console.error('Error' + err);
                })
        }
    })
    return (
        <drinksContext.Provider value={[drinksData]}>
            <App />
        </drinksContext.Provider>
    )
}