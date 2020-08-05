import { readFileSync } from "fs"
import React, { useContext } from 'react'
import { drinksContext, DrinksProvider } from '.'
import loadDrinksData from './load-drink-data'

describe('drinks-context', () => {

    describe("loadDrinksData", () => {
        it("should provide drinks.csv as json promise", async () => {
            const csvContent = readFileSync(__dirname + "/../../public/drinks.csv", "utf-8")
            const rows = csvContent.split('\n')
            const labels = rows[0].split(',').map((label) => label.trim())

            fetch.mockResponseOnce(csvContent)

            const data = await loadDrinksData();

            expect(data.length).toEqual(rows.length - 1)
            data.forEach(drink => {
                expect(Object.keys(drink)).toEqual(labels)
            });

        })
    })
})


