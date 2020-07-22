import React, { useContext, useMemo } from 'react'
import { Chart } from 'react-charts'

import { drinksContext } from './drinks-context'

export default function MyChart() {
  const [drinksData] = useContext(drinksContext)
  const beer_servings = drinksData.map((data) => {
    return data.beer_servings
  }).map((numString) => {
    return parseInt(numString, 10)
  }).sort(
    (a, b) => { return a - b }

  const tuples = beer_servings.map((number, index) => {
    return [index, number]
  })
  console.log(beer_servings)

  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: tuples
      }
    ],
    [tuples]
  )

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  const series = useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} series={series} axes={axes} />
    </div>
  )
  return lineChart;
}