import React from 'react'
import parse from 'csv-parse/lib/sync'

export default function loadDrinksData() {
    return fetch("/drinks.csv")
        .then((response) => response.text())
        .then((text) => parse(text, { columns: true }))
}
// test versuch