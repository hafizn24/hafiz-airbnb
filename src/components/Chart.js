import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { Box } from '@mui/material'

import ChartPie from './ChartPie'
import ChartAP from './ChartAP'
import ChartReview from './ChartReview'
import ChartScat from './ChartScat'


ChartJS.register(ArcElement, Tooltip, Legend)


function Chart() {

  return (
    <>
        <center>
            <Box sx={{
                width:400,
                heigth:400
            }}>
                <ChartPie />
                <ChartAP />
                <ChartReview />
                <ChartScat />
            </Box>
        </center>
    </>
  )
}

export default Chart