import ReactDOM from 'react-dom';
import parse from 'csv-parse/lib/sync'
import React, { createContext, useState, useEffect } from 'react'


export function loadDrinksData() {
    return fetch("/drinks.csv")
        .then((response) => response.text())
        .then((text) => parse(text, { columns: true }))
}

export const drinksContext = createContext()


