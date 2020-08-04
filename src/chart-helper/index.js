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

// Spirits
export function extractSpirit_Servings(input) {
    return input ? input.map((entry) => {
        return entry.spirit_servings
    })
    .map((numString) => {
        return parseInt(numString,10)
    }) : []
}

export function extractTotal_Serving(input){
    return input ? input.map((entry) => {
        return entry.total_litres_of_pure_alcohol
    })
    .map((numString) => {
        return parseInt(numString,10)
    }) : []
}

export function extractLabels (data) {
    return data ? data.map((entry)=>{
        return entry.country
    }): []
 }

 

export function prepareForReactCharts (label, rawData) {
    return [ {
        label,
        data: rawData.map((num, index) => {
            return [index, num]
        })
    }]
}

