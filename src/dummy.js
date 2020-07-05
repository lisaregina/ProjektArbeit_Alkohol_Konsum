import React, {useContext} from 'react'
import {drinksContext} from './drinks-context'

export default function dummy(){
    const [getDrinksData, setDrinksData] = useContext(drinksContext)
    return<h1>drink: {getDrinksData[0].drink}</h1>

}