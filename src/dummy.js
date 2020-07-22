import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {drinksContext} from './drinks-context'

export default function Dummy(){
    const [getDrinksData, setDrinksData] = useContext(drinksContext)
    return  <h1>country: {getDrinksData && getDrinksData.length > 0 ? JSON.stringify(getDrinksData.slice(0,1)[0].drink): "none"} </h1>
            
    
}
