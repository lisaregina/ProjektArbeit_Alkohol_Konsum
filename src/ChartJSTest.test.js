import React, { useContext } from 'react'
import { readFileSync } from "fs"
import ChartJsTest,{ labels } from './ChartJsTest'
import loadDrinksData from './drinks-context/load-drink-data'


describe('ChartJSTest', () => {
    fit("should return all countries in an Array", async () => {

        const csvContent = readFileSync(__dirname + "/../public/drinks.csv", "utf-8")
        const rows = csvContent.split('\n')
        const label = rows[0].split(',').map((label) => label.trim())

        fetch.mockResponseOnce(csvContent)

        const data = await loadDrinksData();

        const countries = [];
        data.forEach(drinksEntry => {


            if (drinksEntry.country) {

                countries.push(drinksEntry.country)

            } else { [] }

        })
        expect(countries).toEqual(labels)
    })
})
