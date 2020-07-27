import {
    extractBeer_Servings,
    prepareForReactCharts
} from '.'
describe('chart-helper', () => {
    describe('extractBeer_Servings', () => {
        it('should return empty list on empty input', () => {
            expect(extractBeer_Servings([])).toEqual([])
            
        })

        it ('should extract beer_servings only as numbers', () => {
            const input = [{
                country: 'Afghanistan',
                beer_servings: '0',
                spirit_servings: '0',
                wine_servings: '0',
                total_litres_of_pure_alcohol: '0'
            }]
            expect(extractBeer_Servings(input)).toEqual([0])
        })
    })
    describe('prepareForReactCharts', () => {
        it('should return an array', () => {
            expect(prepareForReactCharts('', []).length).toBeDefined();
        })

        it('should return Series with Label', () => {
            expect(prepareForReactCharts('Label', [])[0].label).toEqual('Label');
        })

        it('should return tuple of points', () => {
            expect(prepareForReactCharts('Label', [12345])[0].data[0]).toEqual([0, 12345])
        })

    })


})