import React, {useContext} from 'react'
import { Chart, Bar } from 'react-chartjs-2'
import { drinksContext } from './drinks-context'
import {extractBeer_Servings, extractTotal_Serving} from './chart-helper'
import {extractWine_Servings} from './chart-helper'
import {extractSpirit_Servings} from './chart-helper'
import {extractLabels} from './chart-helper'
//import * as ChartAnnotation from 'chartjs-plugin-annotation';//

//Chart.plugins.register([ChartAnnotation]); // 
 


export default function ChartJsTest(){
    const [drinksData] = useContext(drinksContext)

    const labels = extractLabels(drinksData)  
    console.log(labels)

    return <Bar data= {{
        labels: labels,
        datasets: [{
            label: 'average beer',
            data: Array(193).fill(106.16),
            type: 'line',
            backgroundColor: 'rgba(0, 204, 0, 0)',
            borderColor: 'rgba(0, 204, 0, 1)',
            borderWidth: 3.5,
            pointRadius: 0
        },{
            label: 'average wine',
            data: Array(193).fill(49.45),
            type: 'line',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 3.5,
            pointRadius: 0
        },{
            label: 'average spirit',
            data: Array(193).fill(80.99),
            type: 'line',
            backgroundColor: 'rgba(255, 99, 132, 0)',
            borderColor: 'rgba(153, 51, 153, 1)',
            borderWidth: 3.5,
            pointRadius: 0
        },{
            label: 'total litres of alcohol',
            data: extractTotal_Serving (drinksData),
            type: 'line',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 1)',
            borderWidth: 3.5,
            pointRadius: 0
        },{
            label: 'beer consum',
            data: extractBeer_Servings (drinksData),
            backgroundColor: 'rgba(0, 204, 0, 0.2)',
            borderColor: 'rgba(0, 204, 0, 1)',
            borderWidth: 1
        },{
           
            label: 'wine consum',
            data: extractWine_Servings (drinksData),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },{
            label: 'spirit consum',
            data: extractSpirit_Servings (drinksData),
            backgroundColor: 'rgba(153, 51, 153, 0.2)',
            borderColor: 'rgba(153, 51, 153, 1)',
            borderWidth: 1 
        }],
        




}} />

}