import React, {useContext} from 'react'
import { Bar } from 'react-chartjs-2'
import { drinksContext } from './drinks-context'
import {extractBeer_Servings} from './chart-helper'

export default function ChartJsTest(){
    const [drinksData] = useContext(drinksContext)

    const labels = drinksData ? drinksData       //dafür bitte noch einen neuen test schreiben
        .map((entry) =>{
            return entry.country
        })
    : []
    return <Bar data= {{
        labels: labels,
        datasets: [{
            label: 'beer consum',
            data: extractBeer_Servings (drinksData),
            backgroundColor: 
                'rgba(255, 99, 132, 0.2)',
                
    
            borderColor: 
                'rgba(255, 99, 132, 1)',
                
            borderWidth: 1
        }]
    }}/>
}