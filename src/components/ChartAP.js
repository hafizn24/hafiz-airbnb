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
function ChartAP() {
    //   Average Price

    const options = {
        plugins: {
            title: {
              display: true,
              text: 'Chart.js Bar Chart - Stacked',
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
    const labels = ['Hotel room', 'Shared room', 'Entire home/apt', 'Private room',]

    const data = {
        labels,
        datasets: [
            {
                label: 'Bronx',
                data: [0, 600.25641025641, 620.247367004285, 634.686636218165],
                backgroundColor: "#fd7f6f",
                stack: 'Stack 0',
            },
            {
                label: 'Brooklyn',
                data: [736.125, 634.262240562384, 626.865888531712, 625.857974558325],
                backgroundColor: "#7eb0d5",
                stack: 'Stack 1',
            },
            {
                label: 'Manhattan',
                data: [681.87, 632.498135698324, 623.118502961466, 620.377257019665],
                backgroundColor: "#b2e061",
                stack: 'Stack 2',
            },
            {
                label: 'Queens',
                data: [433.25, 645.306629834254, 627.025943646777, 631.797109257627],
                backgroundColor: "#bd7ebe",
                stack: 'Stack 3',
            },
            {
                label: 'Staten Island',
                data: [0, 715.6, 642.156687115597, 603.593432157911],
                backgroundColor: "#ffb55a",
                stack: 'Stack 4',
            },
        ],
      }


    return (
        <Bar options={options} data={data} />
    )
}

export default ChartAP