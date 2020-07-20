import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { drinksContext } from './drinks-context';
import {readFileSync} from 'fs';
import parse from 'csv-parser/lib/sync';

describe('App', () => {
  it('should render all the time equally without data', () =>{
    let tree = (
      <drinksContext.Provider value={[]}>
        <App />
      </drinksContext.Provider>
    )
    const {container} = render(tree);
    expect(container).toMatchSnapshot();
  });

  it('should render all the time equally with data', () =>{
    const rawCsv = readFileSync(__dirname + '/../public/drinks.csv', 'utf8');
    const json = parse(rawCsv, {
      columns: true
    })
    console.log(json)
    let tree = (
      <drinksContext.Provider value={[json]}>
        <App />
      </drinksContext.Provider>
    )
    const {container} = render(tree);
    expect(container).toMatchSnapshot();
  });
})

