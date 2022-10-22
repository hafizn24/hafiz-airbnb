import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
function ChartScat() {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    }

    const labels = ['Bronx', 'Brooklyn', 'Manhattan', 'Queens', 'Staten Island']

    const data = {
        labels,
        datasets: [
            {
                label: 'Entire home/apt',
                data: [620.2473670042859,626.8658885317125,623.1185029614663,627.025943646777,642.1566871155978],
                backgroundColor: "#fd7f6f",
                showLine: false
            },
            {
                label: 'Hotel room',
                data: [0,736.125,681.87,433.25,0],
                backgroundColor: "#7eb0d5",
                showLine: false
            },
            {
                label: 'Private room',
                data: [634.6866362181651,625.8579745583255,620.3772570196659,631.7971092576271,603.5934321579116],
                backgroundColor: "#b2e061",
                showLine: false
            },
            {
                label: 'Shared room',
                data: [600.2564102564103,634.262240562384,632.4981356983244,645.3066298342542,715.6],
                backgroundColor: "#bd7ebe",
                showLine: false
            },
        ],
    }


    return (
        <Line options={options} data={data} />
    )
}

export default ChartScat