import React from 'react'
import parse from 'csv-parser/lib/sync'

export default function loadDrinksData() {
    return fetch("/drinks.csv")
        .then((response) => response.text())
        .then((text) => parse(text, { columns: true }))
}