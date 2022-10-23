import React from 'react'
import { Grid, CardMedia, Box, Typography } from '@mui/material'

import logo from './image/logo.png'
import table from './image/table.png'
import room from './image/room.jpg'

function Hero() {
  return (
    <>
        <Box>
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
            </Grid>
        </Box>
        <Box
            sx={{
                mt:2,
                width: '100%',
                height: 'auto',
                backgroundColor: 'primary.light',
            }}
        >

            <Box
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width:450,
                            height:{
                                sx:200,
                                lg:300
                            },
                            mx:2,
                            mt:2
                        }}
                    >
                        <CardMedia 
                            component="img"
                            width="auto"
                            image={room}
                            alt="room"
                        />  
                    </Box>
                    <Box
                        sx={{
                            width:450,
                            height:300,
                            mx:2,
                            mt:2
                        }}
                    >
                        <Typography variant="subtitle1" color="primary.dark" sx={{fontWeight: 'bold'}} align="center">
                            Airbnb, Inc is an American company that operates an online marketplace for lodging, 
                            primarily homestays for vacation rentals and tourism activities. 
                            Based in San Francisco, California, the platform is accessible via a website and mobile app. 
                            Airbnb does not own any listed properties; instead, it profits by receiving a commission from each booking. 
                            The company was founded in 2008. Airbnb is a shortened version of its original name, AirBedandBreakfast.com.
                        </Typography>
                    </Box>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Box
                        sx={{
                            width:450,
                            height:{
                                sx:200,
                                lg:300
                            },
                            mx:2,
                            mt:2
                        }}
                    >
                        <Typography variant="subtitle1" color="primary.dark" sx={{fontWeight: 'bold'}} align='center'>
                            The following Airbnb activity is included in this New York dataset:
                            Listings, including full descriptions and average review score Reviews, 
                            including unique id for each reviewer and detailed comments Calendar, 
                            including listing id and the price and availability for that day
                        </Typography> 
                    </Box>
                    <Box
                        sx={{
                            width:450,
                            height:{
                                sx:200,
                                lg:300
                            },
                            mx:2,
                            my:2
                        }}
                    >
                        <CardMedia 
                            component="img"
                            width="auto"
                            image={table}
                            alt="table"
                        />  
                    </Box>
                </Grid>
            </Box>

        </Box>
    </>
  )
}

export default Hero


{/* <Grid
container
direction="column"
justifyContent="center"
alignItems="center"
>
<Box
sx={{
    width: 80,
    height: 80,
    mt: 4
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
        height: '95vh',
        backgroundColor: 'primary.light',
    }}
>
    <Box sx={{mt:6}}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Box sx={{height:200, width:550, mx:10}} align="center">
                <Typography variant="subtitle1" color="primary.dark" sx={{fontWeight: 'bold'}}>
                    Airbnb, Inc is an American company that operates an online marketplace for lodging, 
                    primarily homestays for vacation rentals and tourism activities. 
                    Based in San Francisco, California, the platform is accessible via a website and mobile app. 
                    Airbnb does not own any listed properties; instead, it profits by receiving a commission from each booking. 
                    The company was founded in 2008. Airbnb is a shortened version of its original name, AirBedandBreakfast.com.
                </Typography>
            </Box>
            <Box sx={{width:'30%', height:'25%', mx:10}} align="center">
                <CardMedia 
                    component="img"
                    width="auto"
                    image={room}
                    alt="room"
                />  
            </Box>
        </Grid>
    </Box>
    <Box sx={{mt:6}}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Box sx={{width:'30%', height:'25%', mx:10}} align="center">
                <CardMedia 
                    component="img"
                    width="auto"
                    image={table}
                    alt="table"
                />  
            </Box>
            <Box sx={{height:200, width:550, mx:10}} align="center">
                <Typography variant="subtitle1" color="primary.dark" sx={{fontWeight: 'bold'}}>
                    The following Airbnb activity is included in this New York dataset:
                    Listings, including full descriptions and average review score Reviews, 
                    including unique id for each reviewer and detailed comments Calendar, 
                    including listing id and the price and availability for that day
                </Typography>   
            </Box>
        </Grid>
    </Box>
</Box>
</Grid> */}