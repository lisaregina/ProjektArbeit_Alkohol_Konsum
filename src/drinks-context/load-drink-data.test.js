import { readFileSync } from "fs"
import React, { useContext } from 'react'
import { drinksContext, DrinksProvider } from '.'
import loadDrinksData from './load-drink-data'

console.log('#####################', readFileSync)


describe('drinks-context', () => {

    describe("loadDrinksData", () => {
        it("should provide drinks.csv as json promise", async () => {
            const csvContent = readFileSync(__dirname + "/../../public/drinks.csv", "utf-8")
            const rows = csvContent.split('\n')
            const labels = rows[0].split(',').map((label) => label.trim())
            // console.log('????', labels);
            fetch.mockResponseOnce(csvContent)

            const data = await loadDrinksData();
            // console.log(data)    
            expect(data.length).toEqual(rows.length - 1)
            data.forEach(drink => {
                expect(Object.keys(drink)).toEqual(labels)
            });

        })
    })
})


