import React, { useMemo } from 'react'
import { Grid, Typography, Box, Button } from '@material-ui/core'
import bshare from '../assets/bshare.svg'
import bombbtcb from '../assets/bombbtcb.svg'
import {getDisplayBalance} from '../../../utils/formatBalance';
import useStakedBalance from '../../../hooks/useStakedBalance';
import useStakedTokenPriceInDollars from '../../../hooks/useStakedTokenPriceInDollars';
import useEarnings from '../../../hooks/useEarnings';
import TokenSymbol from '../../../components/TokenSymbol';
import useShareStats from '../../../hooks/usebShareStats';
import useBombStats from '../../../hooks/useBombStats';
import useStatsForPool from '../../../hooks/useStatsForPool';
import useBanks from '../../../hooks/useBanks';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';
import useModal from '../../../hooks/useModal';
import WithdrawModal from '../../Bank/components/WithdrawModal';
import useWithdraw from '../../../hooks/useWithdraw';
import useTokenBalance from '../../../hooks/useTokenBalance';
import DepositModal from '../../Bank/components/DepositModal';
import useStake from '../../../hooks/useStake';
import useRedeem from '../../../hooks/useRedeem';


const BombFarmCard = ({bank}) => {
  
  const stakedBalance = useStakedBalance(bank.contract, bank.poolId);
  const earnings = useEarnings(bank.contract, bank.earnTokenName, bank.poolId);
  const bombStats = useBombStats();
  const tShareStats = useShareStats();
  const [banks] = useBanks();
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  let statsOnPool = useStatsForPool(bank);
  const [approveStatus, approve] = useApprove(bank.depositToken, bank.address);
  const tokenBalance = useTokenBalance(bank.depositToken);
  const { onRedeem } = useRedeem(bank);

  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);
  const tokenPriceInDollars = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );
  const earnedInDollars = (
    Number(tokenPriceInDollars) * Number(getDisplayBalance(stakedBalance, bank.depositToken.decimal))
  ).toFixed(2);
  
  const tokenStats = bank.earnTokenName === 'BSHARE' ? tShareStats : bombStats;
  const hTokenPriceInDollars = useMemo(
    () => (tokenStats ? Number(tokenStats.priceInDollars).toFixed(2) : null),
    [tokenStats],
  );
  const hEarnedInDollars = (Number(hTokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

  const {onWithdraw} = useWithdraw(bank);
  const {onStake} = useStake(bank);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onStake(amount);
        onDismissDeposit();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      decimals={bank.depositToken.decimal}
      onConfirm={(amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        onWithdraw(amount);
        onDismissWithdraw();
      }}
      tokenName={bank.depositTokenName}
    />,
  );

  return (
    <>
      
      <Box sx={{ display:'flex' ,alignContent: 'flex-start', flexDirection:'row', marginTop:'2rem' }}>
        {/* <img src={bsharebnb} alt='bomb' style={{height: '48px', width:'48px'}} /> */}
        <TokenSymbol symbol={bank.depositToken.symbol} size={48} />
        <Grid container>
            
            <Grid item xs={2} sx={{width:'38'}}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',marginLeft:'1rem', height: '24px'}}>
                  {(bank.depositTokenName).split('-LP').join('')}
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
            {banks
              .filter((bank) => bank.poolId === 0)
              .map((bank) => {
                //setBankID(bank)
              return(
                <Typography variant='body1' style={{textAlign:'right', marginRight:'1.3rem'}}>
                  TVL: ${statsOnPool?.TVL}
                </Typography>
            )})}
              
            </Grid>
        </Grid>
      </Box>
      <hr style={{opacity:'0.5', margin: '0 24px 1rem 65px'}}/>
      
      <Grid columns={16} container style={{marginleft:'30px'}}>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Daily Returns:
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            {statsOnPool?.dailyAPR}%
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Your Stake
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            {/* <img src={bombbtcb} alt='bomb' style={{height: '22px', width:'22px'}} /> */}
            <TokenSymbol symbol={bank.depositToken.symbol} size={30} />
            {getDisplayBalance(stakedBalance, bank.depositToken.decimal)}<br />
            {`≈ $${earnedInDollars}`}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Earned
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            {/* <img src={bshare} alt='bomb' style={{height: '22px', width:'22px'}} /> */}
            <TokenSymbol symbol={bank.earnToken.symbol} size={30}/>
            {getDisplayBalance(earnings)}<br />
            {`≈ $${earnedInDollars}`}
          </Typography>
        </Grid>
          <Grid item xs={6} style={{marginTop:'3rem'}}>
          <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center', marginTop:'0.5rem'}}>
            
          {approveStatus !== ApprovalState.APPROVED ? (
              <Button
                disabled={
                  bank.closedForStaking ||
                  approveStatus === ApprovalState.PENDING ||
                  approveStatus === ApprovalState.UNKNOWN
                }
                onClick={approve}
                variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 110px', textAlign:'center', marginLeft:'0.5rem', whiteSpace:'nowrap'}}
              >
                <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize'}}>
                  Approve
                </Typography>
               
              </Button>
            ) : (
              <>
                <Button disabled={bank.closedForStaking} onClick={() => (bank.closedForStaking ? null : onPresentDeposit())} variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginRight:'0.5rem' }}>
                  <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center' }}>
                    Deposit
                  </Typography>
                </Button>
                <Button onClick={onPresentWithdraw} variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginLeft:'0.5rem', marginRight:'0.5rem' }}>
                  <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                    Withdraw
                  </Typography>
                </Button> 

                
              </>
            )}

            {/* <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginRight:'0.5rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center' }}>
                Deposit
              </Typography>
            </Button>
            <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginLeft:'0.5rem', marginRight:'0.5rem' }}>
              <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                Withdraw
              </Typography>
            </Button> */}
            
            <Button onClick={onRedeem} variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 110px', textAlign:'center', marginLeft:'0.5rem', whiteSpace:'nowrap'}}>
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

export default BombFarmCard