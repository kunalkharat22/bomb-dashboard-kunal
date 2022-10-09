import React from 'react'
import bonds from '../assets/bonds.svg'
import { Box, Grid, Typography, Button } from '@material-ui/core'
import useBondStats from '../../../hooks/useBondStats';

const Bonds = () => {

  const bondStat = useBondStats();
  console.log(bondStat);

  return (
    <>
    <Box sx={{ display:'flex' ,alignContent: 'flex-start', flexDirection:'row' }}>
        <img src={bonds} alt='bomb' style={{height: '48px', width:'48px'}} />
      <Grid container>
        <Grid item xs={9}>
          <Box>   
            <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',marginLeft:'1rem', height: '24px'}}>
              Bonds
            </Typography>
            <Typography variant='body1' style={{color: '#fff', textTransform: 'capitalize',marginLeft:'1rem', height: '24px', marginTop:'0.75rem'}}>
              BBOND can be purchased only on contraction periods, when TWAP of BOMB is below 1
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>

    <Grid container style={{marginleft:'30px', marginTop:'1rem'}}>
        <Grid item xs={3} style={{marginTop:'1rem'}}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Current Price: (Bomb)^2
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            BBond = {bondStat?.tokenInFtm} BTCB
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant='body1' style={{fontSize:'1.1rem', textAlign:'center', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Available to redeem: 
          </Typography>
          <Typography variant='h4' style={{ color: '#fff',marginLeft:'1rem', textAlign:'center'}}>
            <img src={bonds} alt='bomb' style={{height: '35px', width:'35px'}} />456
          </Typography>
        </Grid>
        <Grid item xs={4} >
          < Grid container>
            <Grid item xs={6}>
              <Box>
                <Typography variant='h6' style={{ color: '#fff'}}>
                  Purchase BBond
                </Typography>
                <Typography variant='body1' style={{ color: '#fff'}}>
                  Bomb is over peg
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginleft:'10rem'  }}>
                <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center', }}>
                   Purchase
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <hr style={{opacity:'0.5'}}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h6' style={{ color: '#fff'}}>
                  Reedem Bomb
                </Typography>
            </Grid>
            <Grid item xs={6}>
              <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginleft:'10rem'  }}>
                <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center', }}>
                   Reedem
                </Typography>
              </Button>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Bonds