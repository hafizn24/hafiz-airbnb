import {Box, Typography } from '@mui/material'

import pdf from './pdf/Airbnb Preprocessing.pdf'

function Prep() {
  return (
    <>
        <Box sx={{mt:0, mb:2, p:2}}>
            <Typography variant='h5' align="center"><b>Data Preparation</b></Typography>
        </Box>
        <Box
          align="center"
            sx={{
                width: '100%',
                height: 'auto',
                backgroundColor: 'secondary.main',
            }}
        >
          <Box
          align="center"
          sx={{
            width:{
              xs:'100%',
              sm:'60vh',
              lg:'55%',
            }
          }}
          >
            <iframe src={pdf} frameborder="0" width="100%" height="550"></iframe>
          </Box>
        </Box>
    </>
  )
}

export default Prep