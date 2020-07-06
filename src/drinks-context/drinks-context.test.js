import { readFileSync } from "fs"
import {loadDrinksData} from './'


describe('drinks-context', () => {
    describe("loadDrinksData", () => {
        it("should provide drinks.csv as json promise", () => {
            const csvContent = readFileSync( __dirname + "/../../public/drinks.csv", "utf-8")
            const rows = csvContent.split('\n')
            const labels = rows[0].split(',')
            console.log(labels);
            fetch.mockResponseOnce(csvContent)
            const data = await loadDrinksData()
            console.log('####', data)

            expect(data.length).toEqual(rows.length-1)
            data.forEach((drink) => {
                expect(Object.keys(drink)).toEqual(labels)})
        })
    })
})