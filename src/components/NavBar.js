import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {CardMedia, Grid} from '@mui/material'

import logo from './image/logo.png'

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, pb:6}}>
      <AppBar  elevation={0}>
        <Toolbar>
          <Box
            sx={{
              width: 48,
              height: 48,
              m:1,
            }}
          >
              <CardMedia 
                  component="img"
                  width="auto"
                  image={logo}
                  alt="logo"
              />
          </Box>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button><Typography variant="subtitle2" color="ivory" sx={{ fontWeight: 'bold' }}>Preparation</Typography></Button>
            <Button><Typography variant="subtitle2" color="ivory" sx={{ fontWeight: 'bold' }}>Visualization</Typography></Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar

