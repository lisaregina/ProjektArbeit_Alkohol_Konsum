import React, { useContext, useMemo } from 'react'
import { Chart } from 'react-charts'

import { drinksContext } from './drinks-context'
import { prepareForReactCharts, extractBeer_Servings } from './chart-helper'

export default function MyChart() {
  const [drinksData] = useContext(drinksContext)
  const data = useMemo(
    () => prepareForReactCharts("Series 1", extractBeer_Servings(drinksData)),
    [drinksData]
  )

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { primary: false, type: 'linear', position: 'left' }
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
