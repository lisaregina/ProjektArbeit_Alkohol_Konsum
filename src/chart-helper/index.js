export function extractBeer_Servings(input) {
    return input ? input.map((entry) => {
        return entry.beer_servings
    })
    .map((numString) => {
        return parseInt(numString,10)
    }) : []
}

//wine
export function extractWine_Servings(input) {
    return input ? input.map((entry) => {
        return entry.wine_servings
    })
    .map((numString) => {
        return parseInt(numString,10)
    }) : []
}

export function prepareForReactCharts (label, rawData) {
    return [ {
        label,
        data: rawData.map((num, index) => {
            return [index, num]
        })
    }]
}