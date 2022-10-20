import React from 'react'
import { Grid, CardMedia, Box, Typography } from '@mui/material'

import logo from './image/logo.png'

function Hero() {
  return (
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
    >
        <Box
        sx={{
            width: 80,
            height: 80,
            mt: 6
          }}
        >
            <CardMedia 
                component="img"
                width="auto"
                image={logo}
                alt="logo"
            />
        </Box>
        <Typography variant="h5" sx={{mt:2}}><b>Data Preparation</b> and <b>Visualization</b></Typography>
        <Box
            sx={{
                mt:4,
                width: '100%',
                height: '66vh',
                backgroundColor: 'primary.light',
            }}
        >

        </Box>
    </Grid>
  )
}

export default Hero