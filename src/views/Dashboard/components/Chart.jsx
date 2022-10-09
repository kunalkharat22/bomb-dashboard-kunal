import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import bshare from '../assets/bshare.svg'
import bomb from '../assets/bomb.svg'
import bonds from '../assets/bonds.svg'
import bsharebnb from '../assets/bsharebnb.svg'
import bombbtcb from '../assets/bombbtcb.svg'

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
            <Typography variant='h6' style={{ textTransform: 'capitalize', color: '#ffffff' }}>
              <img src={bomb} alt='bomb' style={{height: '25px', width:'25px', backgroundColor: 'rgba(55, 55, 71, 1)', borderRadius: '50%', marginRight:'0.2rem'}} />
              Bomb: 17%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' style={{ textTransform: 'capitalize', color: '#ffffff' }}>
            <img src={bombbtcb} alt='bomb' style={{height: '25px', width:'25px', backgroundColor: 'rgba(55, 55, 71, 1)', borderRadius: '50%', marginRight:'0.2rem'}} />
              Bomb-BTCB: 17%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' style={{ textTransform: 'capitalize', color: '#ffffff' }}>
            <img src={bshare} alt='bomb' style={{height: '25px', width:'25px', backgroundColor: 'rgba(55, 55, 71, 1)', borderRadius: '50%', marginRight:'0.2rem'}} />
              BShare: 12%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' style={{ textTransform: 'capitalize', color: '#ffffff' }}>
            <img src={bsharebnb} alt='bomb' style={{height: '25px', width:'25px', backgroundColor: 'rgba(55, 55, 71, 1)', borderRadius: '50%', marginRight:'0.2rem'}} />
              Bshare-BNB: 17%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' style={{ textTransform: 'capitalize', color: '#ffffff' }}>
            <img src={bonds} alt='bomb' style={{height: '25px', width:'25px', backgroundColor: 'rgba(55, 55, 71, 1)', borderRadius: '50%', marginRight:'0.2rem'}} />
              Bbond: 20%</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' style={{ textTransform: 'capitalize', color: '#ffffff' }}>
            
              Others: 17%</Typography>
          </Grid>
        </Grid>
      </Box></>
  )
}

export default Chart