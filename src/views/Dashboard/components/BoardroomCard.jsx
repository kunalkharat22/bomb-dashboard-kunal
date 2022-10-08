import React from 'react'
import bomb from '../assets/bomb.svg'
import bshare from '../assets/bshare.svg'
import { Box, Typography, Grid, Button } from '@material-ui/core'


const BoardroomCard = () => {
  return (
    <>
      <Box sx={{ display:'flex' ,alignContent: 'flex-start', flexDirection:'row' }}>
        <img src={bshare} alt='bomb' style={{height: '48px', width:'48px'}} />
        <Grid container style={{marginRight:'24px'}}>
            
            <Grid item xs={2}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',marginLeft:'1rem', height: '24px'}}>
                  Boardroom
              </Typography>
            </Grid>
            
            <Grid item xs={10}>
              <Box sx={{display:'flex', marginLeft: '1rem'}}>  
                <Typography variant='body1' style={{ height: '25px', borderRadius: '5px' ,backgroundColor: 'rgba(0, 232, 162, 0.5)', color:'#fff', textTransform: 'capitalize', padding: '0.1rem', marginLeft:'1rem'}}>
                    Recommended
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={6} >
              <Typography variant='body1' style={{margin: '0.5rem 0 0 1rem'}}>
                Stake BSHARE and earn BOMB every epoch
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body1' style={{textAlign:'right',margin: '0.5rem 0 0 1rem'}}>
                TVL: $1,008,430
              </Typography>
            </Grid>
        </Grid>
      </Box>
      <hr style={{opacity:'0.5', margin: '10px 24px 0 65px'}}/>

      <Box sx={{ display:'flex', justifyContent: 'flex-end'}}>
      <Typography variant='body1' style={{textAlign:'right',margin: '0.5rem 24px 0 1rem'}}>
        Total Staked:<img src={bshare} alt='bomb' style={{height: '16px', width:'16px'}} />7323
      </Typography>
      </Box>

      <Grid columns={16} container style={{marginleft:'30px'}}>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Daily Returns:
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            2%
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Your Stake
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            <img src={bshare} alt='bomb' style={{height: '22px', width:'22px'}} />124.21
            ≈$1171.62
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Earned
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            <img src={bomb} alt='bomb' style={{height: '22px', width:'22px'}} />124.21
            ≈$1171.62
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center', marginTop:'0.5rem'}}>
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginRight:'0.5rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center' }}>
                Deposit
              </Typography>
            </Button>
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginLeft:'0.5rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                Withdraw
              </Typography>
            </Button>
            
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 170px', textAlign:'center', whiteSpace:'nowrap', marginTop: '1rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize'}}>
                Claim Rewards
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default BoardroomCard