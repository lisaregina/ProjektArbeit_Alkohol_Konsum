import React, {useContext} from 'react'
import { Bar } from 'react-chartjs-2'
import { drinksContext } from './drinks-context'
import {extractBeer_Servings} from './chart-helper'
import {extractWine_Servings} from './chart-helper'
import {extractSpirit_Servings} from './chart-helper'
 
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
                'rgba(0, 204, 0, 0.2)',
                
    
            borderColor: 
                'rgba(0, 204, 0, 1)',
                
            borderWidth: 1
        },
            {
            label: 'wine consum',
            data: extractWine_Servings (drinksData),
            backgroundColor: 
            'rgba(255, 99, 132, 0.2)',
        

            borderColor: 
            'rgba(255, 99, 132, 1)',
        
        borderWidth: 1},

            {
            label: 'spirit consum',
            data: extractSpirit_Servings (drinksData),
            backgroundColor: 
            'rgba(153, 51, 153, 0.2)',


            borderColor: 
            'rgba(153, 51, 153, 1)',

        borderWidth: 1 },


         
    ]
        
}}/>
        
}