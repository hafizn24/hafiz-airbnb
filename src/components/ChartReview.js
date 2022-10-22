import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function ChartReview() {

    const options = {
        plugins: {
            title: {
              display: true,
              text: 'Average of review rate number by neighbourhood group and room type',
            },
          },
          responsive: true,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          }
    }

    const labels = ['Staten Island', 'Bronx', 'Queens', 'Manhattan', 'Brooklyn']

    const data = {
        labels,
        datasets: [
            {
                label: 'Entire home/apt',
                data: [3.33,3.34,3.35,3.27,3.25],
                backgroundColor: "#fd7f6f",
                stack: 'Stack 0',
            },
            {
                label: 'Hotel room',
                data: [0,0,3.75,3.5,3.75],
                backgroundColor: "#7eb0d5",
                stack: 'Stack 1',
            },
            {
                label: 'Private room',
                data: [3.48,3.33,3.31,3.28,3.26],
                backgroundColor: "#b2e061",
                stack: 'Stack 2',
            },
            {
                label: 'Shared room',
                data: [3.53,3.26,3.38,3.26,3.34],
                backgroundColor: "#bd7ebe",
                stack: 'Stack 3',
            },
        ],
      }

    return (
        <Bar options={options} data={data} />
    )
}

export default ChartReview