import React from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core'
import bshare from '../assets/bshare.svg'
import bomb from '../assets/bomb.svg'
import bsharebnb from '../assets/bsharebnb.svg'
import bombbtcb from '../assets/bombbtcb.svg'

const BombFarms = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <Box>   
            <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',marginLeft:'1rem', height: '24px'}}>
              Bomb Farms
            </Typography>
            <Typography variant='body1' style={{color: '#fff', textTransform: 'capitalize',marginLeft:'1rem', height: '24px', marginTop:'0.75rem'}}>
              Stake your LP tokens in our farms to start earning $BSHARE
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '10px 120px 25px 120px', marginRight:'0.5rem', alignItems:'center' }}>
            <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign:'center', whiteSpace:'nowrap', marginTop: '1rem' }}>
                Claim All <img src={bshare} alt='bomb' style={{height: '22px', width:'22px', backgroundColor: 'rgba(55, 55, 71, 1)', borderRadius: '50%'}} />
            </Typography>
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ display:'flex' ,alignContent: 'flex-start', flexDirection:'row', marginTop:'2rem' }}>
        <img src={bombbtcb} alt='bomb' style={{height: '48px', width:'48px'}} />
        <Grid container>
            
            <Grid item xs={2} sx={{width:'38'}}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',marginLeft:'1rem', height: '24px'}}>
                  BOMB-BTCB
              </Typography>
            </Grid>
            
            <Grid item xs={2}>
              <Box sx={{display:'flex'}}>  
                <Typography variant='body1' style={{ height: '25px', borderRadius: '5px' ,backgroundColor: 'rgba(0, 232, 162, 0.5)', color:'#fff', textTransform: 'capitalize', padding: '0.1rem'}}>
                    Recommended
                </Typography>
              </Box>
            </Grid>
            
            
            <Grid item xs={8}>
              <Typography variant='body1' style={{textAlign:'right', marginRight:'1.3rem'}}>
                TVL: $1,008,430
              </Typography>
            </Grid>
        </Grid>
      </Box>
      <hr style={{opacity:'0.5', margin: '0 24px 0 65px'}}/>

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
            <img src={bombbtcb} alt='bomb' style={{height: '22px', width:'22px'}} />124.21
            ≈$1171.62
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Earned
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            <img src={bshare} alt='bomb' style={{height: '22px', width:'22px'}} />124.21
            ≈$1171.62
          </Typography>
        </Grid>
          <Grid item xs={6} style={{marginTop:'3rem'}}>
          <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center', marginTop:'0.5rem'}}>
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginRight:'0.5rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center' }}>
                Deposit
              </Typography>
            </Button>
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginLeft:'0.5rem', marginRight:'0.5rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                Withdraw
              </Typography>
            </Button>
            
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 110px', textAlign:'center', marginLeft:'0.5rem', whiteSpace:'nowrap'}}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize'}}>
                Claim Rewards
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>



      <hr style={{marginTop:'1.5rem'}}/>



      <Box sx={{ display:'flex' ,alignContent: 'flex-start', flexDirection:'row', marginTop:'2rem' }}>
        <img src={bsharebnb} alt='bomb' style={{height: '48px', width:'48px'}} />
        <Grid container>
            
            <Grid item xs={2} sx={{width:'38'}}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',marginLeft:'1rem', height: '24px'}}>
                  BSHARE-BNB
              </Typography>
            </Grid>
            
            <Grid item xs={2}>
              <Box sx={{display:'flex'}}>  
                <Typography variant='body1' style={{ height: '25px', borderRadius: '5px' ,backgroundColor: 'rgba(0, 232, 162, 0.5)', color:'#fff', textTransform: 'capitalize', padding: '0.1rem'}}>
                    Recommended
                </Typography>
              </Box>
            </Grid>
            
            
            <Grid item xs={8}>
              <Typography variant='body1' style={{textAlign:'right', marginRight:'1.3rem'}}>
                TVL: $1,008,430
              </Typography>
            </Grid>
        </Grid>
      </Box>
      <hr style={{opacity:'0.5', margin: '0 24px 0 65px'}}/>

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
            <img src={bsharebnb} alt='bomb' style={{height: '22px', width:'22px'}} />124.21
            ≈$1171.62
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Earned
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            <img src={bshare} alt='bomb' style={{height: '22px', width:'22px'}} />124.21
            ≈$1171.62
          </Typography>
        </Grid>
          <Grid item xs={6} style={{marginTop:'3rem'}}>
          <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center', marginTop:'0.5rem'}}>
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginRight:'0.5rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center' }}>
                Deposit
              </Typography>
            </Button>
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginLeft:'0.5rem', marginRight:'0.5rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                Withdraw
              </Typography>
            </Button>
            
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 110px', textAlign:'center', marginLeft:'0.5rem', whiteSpace:'nowrap'}}>
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

export default BombFarms