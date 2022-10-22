import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { Box } from '@mui/material'

import ChartPie from './ChartPie'
import ChartAP from './ChartAP'


ChartJS.register(ArcElement, Tooltip, Legend)


function Chart() {




//   Review
  const group_review = [
    'Brooklyn', 'Queens', 'Staten Island', 'Manhattan',
    'Staten Island', 'Queens', 'Queens', 'Bronx', 'Brooklyn', 'Bronx',
    'Staten Island', 'Queens', 'Manhattan', 'Manhattan', 'Bronx',
    'Brooklyn', 'Manhattan', 'Brooklyn'
  ]
  const rate_review = [
    3.75, 3.75, 3.53, 3.5 , 3.48, 
    3.38, 3.35, 3.34, 3.34, 3.33, 
    3.33, 3.31, 3.28, 3.27, 3.26, 
    3.26, 3.26, 3.25
  ]
  const room_review = [
    'Hotel room', 'Hotel room', 'Shared room', 'Hotel room',
    'Private room', 'Shared room', 'Entire home/apt',
    'Entire home/apt', 'Shared room', 'Private room',
    'Entire home/apt', 'Private room', 'Private room',
    'Entire home/apt', 'Shared room', 'Private room', 'Shared room',
    'Entire home/apt'
  ]

// Scatter Plot
  const group_scat = [
    'Bronx', 'Bronx', 'Bronx', 'Brooklyn', 'Brooklyn', 'Brooklyn',
    'Brooklyn', 'Manhattan', 'Manhattan', 'Manhattan', 'Manhattan',
    'Queens', 'Queens', 'Queens', 'Queens', 'Staten Island',
    'Staten Island', 'Staten Island'
  ]
  const price_scat = [
    620.247367  , 634.68663622, 600.25641026, 626.86588853,
    736.125     , 625.85797456, 634.26224056, 623.11850296,
    681.87      , 620.37725702, 632.4981357 , 627.02594365,
    433.25      , 631.79710926, 645.30662983, 642.15668712,
    603.59343216, 715.6
  ]
  const room_scat = [
    'Entire home/apt', 'Private room', 'Shared room',
    'Entire home/apt', 'Hotel room', 'Private room', 'Shared room',
    'Entire home/apt', 'Hotel room', 'Private room', 'Shared room',
    'Entire home/apt', 'Hotel room', 'Private room', 'Shared room',
    'Entire home/apt', 'Private room', 'Shared room'
  ]

  return (
    <>
        <center>
            <Box sx={{
                width:400,
                heigth:400
            }}>
                {/* <ChartPie /> */}
                <ChartAP />
            </Box>
        </center>
    </>
  )
}

export default Chart