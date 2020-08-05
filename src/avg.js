import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import {drinksContext} from './drinks-context'
import { Radar } from 'react-chartjs-2'


export default function Avg(){
    const [getDrinksData] = useContext(drinksContext);
    let avg = {
        beer: {
            consumptionOverall: 0,
            averageConsumption: 0,
        },
        wine: {
            consumptionOverall: 0,
            averageConsumption: 0,
        },
        spirit: {
            consumptionOverall: 0,
            averageConsumption: 0,
        },
        total: {
            consumptionOverall: 0,
            averageConsumption: 0,
        },
    };
    

    getDrinksData.forEach(country => {
        avg.beer.consumptionOverall = avg.beer.consumptionOverall + parseFloat(country.beer_servings);
        avg.beer.averageConsumption = Math.round((avg.beer.consumptionOverall / getDrinksData.length) * 100) / 100;
        
        avg.wine.consumptionOverall = avg.wine.consumptionOverall + parseFloat(country.wine_servings);
        avg.wine.averageConsumption = Math.round((avg.wine.consumptionOverall / getDrinksData.length) * 100) / 100;
        
        avg.spirit.consumptionOverall = avg.spirit.consumptionOverall + parseFloat(country.spirit_servings);
        avg.spirit.averageConsumption = Math.round((avg.spirit.consumptionOverall / getDrinksData.length) * 100) / 100;
        
        avg.total.consumptionOverall = Math.round((avg.total.consumptionOverall + parseFloat(country.total_litres_of_pure_alcohol)) * 100) / 100;
        avg.total.averageConsumption = Math.round((avg.total.consumptionOverall / getDrinksData.length) * 100) / 100;
    });

    return <div>
        <h1>Ø Average Consumption</h1>
        <span class = 'average'>Beer Consumption Overall: {avg.beer.consumptionOverall} l / Average: <span id = 'beer'><b>{avg.beer.averageConsumption} L</b></span></span><br/>
        <span class = 'average'>Wine Consumption Overall: {avg.wine.consumptionOverall} l / Average: <span id = 'wine'><b>{avg.wine.averageConsumption} L</b></span></span><br/>
        <span class = 'average'>Spirit Consumption Overall: {avg.spirit.consumptionOverall} l / Average: <span id = 'spirit'><b>{avg.spirit.averageConsumption} L</b></span></span><br/>
        <span><b>Total Litres of Pure Alcohol Overall: {avg.total.consumptionOverall} l / Average: {avg.total.averageConsumption} L</b></span><br/>
        
    </div>
    
}