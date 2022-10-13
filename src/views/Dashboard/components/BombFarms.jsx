import React, { useState, useEffect } from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core'
import bshare from '../assets/bshare.svg'
import bomb from '../assets/bomb.svg'
import bsharebnb from '../assets/bsharebnb.svg'
import bombbtcb from '../assets/bombbtcb.svg'
import useBank from '../../../hooks/useBank'
import useBanks from '../../../hooks/useBanks'
import BombFarmCard from './BombFarmCard'
import useStatsForPool from '../../../hooks/useStatsForPool'
import useRedeem from '../../../hooks/useRedeem'

const BombFarms = () => {

  const [banks] = useBanks();
  const bank = useBank("BombBShareRewardPool");
  const { onRedeem } = useRedeem(bank);

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
          <Button onClick={onRedeem} variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '10px 120px 25px 120px', marginRight:'0.5rem', alignItems:'center' }}>
            <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign:'center', whiteSpace:'nowrap', marginTop: '1rem' }}>
                Claim All <img src={bshare} alt='bomb' style={{height: '22px', width:'22px', backgroundColor: 'rgba(55, 55, 71, 1)', borderRadius: '50%'}} />
            </Typography>
          </Button>
        </Grid>
      </Grid>

      
        {banks
          .filter((bank) => bank.poolId === 1)
          .map((bank) => (
            <BombFarmCard bank={bank}/>
          ))}
        

      

      <hr style={{marginTop:'1.5rem'}}/>



      
      {banks
          .filter((bank) => bank.poolId === 0)
          .map((bank) => (
            <BombFarmCard bank={bank}/>
          ))}
      
      

    </>
  )
}

export default BombFarms