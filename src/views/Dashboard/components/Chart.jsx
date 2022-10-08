import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'

import elipse from '../assets/elipse.svg'

const Chart = () => {
  return (
    <>
    <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex',  }}>
      <img src={elipse} style={{ width: 190, height: 190}} alt='elipse'/>
      <Typography variant='h6' style={{ color: '#fff', marginLeft: '-132px'}}>$10,451<br />+22%</Typography>
    </Box>
    <Box style={{marginTop: '1rem'}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Bomb: 17%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Bomb-BTCB: 17%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>BDhare: 12%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Bshare-BNB: 17%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Bbond: 20%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='body1' style={{ textTransform: 'capitalize', color: '#ffffff' }}>Others: 17%</Typography>
          </Grid>
        </Grid>
      </Box></>
  )
}

export default Chart