import { Grid, CardMedia, Box, Typography } from '@mui/material'
import { Document, Page } from 'react-pdf'

import notebook from './pdf/Airbnb Preprocessing.pdf'

function Prep() {
  return (
    <>
        <Box sx={{mt:8, mb:6}}>
            <Typography variant='h5' align="center" color="primary.dark"><b>Data Preparation</b></Typography>
        </Box>
        <Box
            sx={{
                width: '100%',
                height: '76vh',
                backgroundColor: 'secondary.main',
            }}
        >
          <Document file={notebook}>
            <Page pageNumber={1}/>
          </Document>
        </Box>
    </>
  )
}

export default Prep