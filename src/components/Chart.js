import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { Box, Grid, Paper } from '@mui/material'

import ChartPie from './ChartPie'
import ChartAP from './ChartAP'
import ChartReview from './ChartReview'
import ChartScat from './ChartScat'


ChartJS.register(ArcElement, Tooltip, Legend)


function Chart() {

  return (
    <Box sx={{pt:3}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box
          sx={{width:300, m:2, p:1, borderRadius: 3, backgroundColor:'white'}}
        >
          <ChartPie />
        </Box>
        <Box
          sx={{width:450, m:2, p:1, borderRadius: 3, backgroundColor:'white'}}
        >
          <ChartAP />
        </Box>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Box
          sx={{width:450, m:2, p:1, borderRadius: 3, backgroundColor:'white'}}
        >
          <ChartReview />
        </Box>
        <Box
          sx={{width:450, m:2, p:1, borderRadius: 3, backgroundColor:'white'}}
        >
          <ChartScat />
        </Box>
      </Grid>
        
    </Box>
  )
}

export default Chart