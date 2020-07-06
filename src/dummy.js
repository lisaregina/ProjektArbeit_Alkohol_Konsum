import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {drinksContext} from './drinks-context'

export default function Dummy(){
    const [getDrinksData, setDrinksData] = useContext(drinksContext)
    return<h1>drink: {getDrinksData[0].drink}</h1>
    
}