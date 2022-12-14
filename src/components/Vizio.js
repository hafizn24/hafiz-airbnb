import {Box, Typography, Link, Tooltip, IconButton, Grid } from '@mui/material'

import { BsFileEarmarkPdf } from 'react-icons/bs'
import { SiPowerbi } from 'react-icons/si'

import Chart from './Chart'

import powerpdf from './pdf/Airbnb_PowerBI.pdf'
import powerbi from './pdf/Airbnb_PowerBI.pbix'

function Vizio() {
  return (
    <>
      <Box sx={{mt:0, mb:2}}>
        <Typography variant='h5' align="center"><b>Visualization</b></Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{m:1}}>
            <Tooltip title="Data Visualization PDF">
              <Link href={powerpdf} underline="none" target={"_blank"} sx={{mx:1}}>
                  <IconButton><BsFileEarmarkPdf size={42} color='black'/></IconButton>
              </Link>
            </Tooltip>
            <Tooltip title="Power BI">
                <Link href={powerbi} underline="none" target={"_blank"} sx={{mx:1}}>
                    <IconButton><SiPowerbi size={42} color='black'/></IconButton>
                </Link>
            </Tooltip>
          </Box>
        </Grid>
      </Box>
      <Chart />
    </>
  
  )
}

export default Vizio