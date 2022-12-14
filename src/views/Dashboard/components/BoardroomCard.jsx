import React, {useMemo, useEffect, useState} from 'react'
import bomb from '../assets/bomb.svg'
import bshare from '../assets/bshare.svg'
import { Box, Typography, Grid, Button } from '@material-ui/core'
import useEarningsOnBoardroom from './../../../hooks/useEarningsOnBoardroom';
import useBombStats from './../../../hooks/useBombStats';
import {getDisplayBalance} from './../../../utils/formatBalance';
import useStakedBalanceOnBoardroom from './../../../hooks/useStakedBalanceOnBoardroom';
import useStakedTokenPriceInDollars from './../../../hooks/useStakedTokenPriceInDollars';
import useBombFinance from './../../../hooks/useBombFinance';
import useTotalStakedOnBoardroom from './../../../hooks/useTotalStakedOnBoardroom';
import useHarvestFromBoardroom from './../../../hooks/useHarvestFromBoardroom';
import useClaimRewardCheck from './../../../hooks/boardroom/useClaimRewardCheck';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';
import useWithdrawCheck from '../../../hooks/boardroom/useWithdrawCheck';
import useModal from '../../../hooks/useModal';
import WithdrawModal from '../../Bank/components/WithdrawModal';
import useWithdrawFromBoardroom from '../../../hooks/useWithdrawFromBoardroom';
import useStakeToBoardroom from '../../../hooks/useStakeToBoardroom';
import DepositModal from '../../Bank/components/DepositModal';
import useTokenBalance from '../../../hooks/useTokenBalance';
import { BsFillArrowUpCircleFill, BsArrowDownCircleFill } from 'react-icons/bs';
  

const BoardroomCard = () => {
  const bombStats = useBombStats();
  const earnings = useEarningsOnBoardroom();
  const stakedBalance = useStakedBalanceOnBoardroom();
  const bombFinance = useBombFinance();
  const totalStaked = useTotalStakedOnBoardroom();
  const {onReward} = useHarvestFromBoardroom();
  const canClaimReward = useClaimRewardCheck();
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars('BSHARE', bombFinance.BSHARE);
  const [approveStatus, approve] = useApprove(bombFinance.BSHARE, bombFinance.contracts.Boardroom.address);
  const tokenBalance = useTokenBalance(bombFinance.BSHARE);
  const [boardroomTVL, setBoardroomTVL] = useState('')
  const [dailyAPR, setDailyAPR] = useState('')

  const getTVL = async () => {
    const boardroomtShareBalanceOf = await bombFinance.BSHARE.balanceOf(bombFinance.currentBoardroom().address);
    const BSHAREPrice = ( await bombFinance.getShareStat()).priceInDollars;
    const boardroomTVL = Number(getDisplayBalance(boardroomtShareBalanceOf, bombFinance.BSHARE.decimal)) * Number(BSHAREPrice);
    setBoardroomTVL(boardroomTVL)
  };

  useEffect(() => {
    getTVL()
    getDailyAPR()
  }, [])
  
  
  // BshareBnbLPBShareRewardPool

  const getDailyAPR = async () => {
    const dailyAPR = (await bombFinance.getBoardroomAPR()) / 365;
    setDailyAPR(dailyAPR);
  }


  const tokenPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  )

  const bTokenPriceInDollars = useMemo(
    () =>
      stakedTokenPriceInDollars
        ? (Number(stakedTokenPriceInDollars) * Number(getDisplayBalance(stakedBalance))).toFixed(2).toString()
        : null,
    [stakedTokenPriceInDollars, stakedBalance],
  )

  const earnedInDollars = (Number(tokenPriceInDollars) * Number(getDisplayBalance(earnings))).toFixed(2);

  
  const {onStake} = useStakeToBoardroom();
  const {onWithdraw} = useWithdrawFromBoardroom();
  const canWithdrawFromBoardroom = useWithdrawCheck();

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={(value) => {
        onStake(value);
        onDismissDeposit();
      }}
      tokenName={'BShare'}
    />,
  );

  const [onPresentWithdraw, onDismissWithdraw] = useModal(
    <WithdrawModal
      max={stakedBalance}
      onConfirm={(value) => {
        onWithdraw(value);
        onDismissWithdraw();
      }}
      tokenName={'BShare'}
    />,
  );

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
                TVL: ${Number(boardroomTVL).toFixed(2)}
              </Typography>
            </Grid>
        </Grid>
      </Box>
      <hr style={{opacity:'0.5', margin: '10px 24px 0 65px'}}/>

      <Box sx={{ display:'flex', justifyContent: 'flex-end'}}>
      <Typography variant='body1' style={{textAlign:'right',margin: '0.5rem 24px 0 1rem'}}>
        Total Staked:<img src={bshare} alt='bomb' style={{height: '16px', width:'16px'}} />{getDisplayBalance(totalStaked)}
      </Typography>
      </Box>

      <Grid columns={16} container style={{marginleft:'30px'}}>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Daily Returns:
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            {Number(dailyAPR).toFixed(2)}%
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Your Stake
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            <img src={bshare} alt='bomb' style={{height: '22px', width:'22px'}} />
            {getDisplayBalance(earnings)}<br />???{earnedInDollars}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant='body1' style={{fontSize:'1.1rem', color: '#fff', textTransform: 'capitalize',marginLeft:'1rem'}}>
            Earned
          </Typography>
          <Typography variant='h5' style={{ color: '#fff',marginLeft:'1rem'}}>
            <img src={bomb} alt='bomb' style={{height: '22px', width:'22px'}} />
            {getDisplayBalance(stakedBalance)}<br />
            ???{bTokenPriceInDollars}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center', marginTop:'0.5rem'}}>            

            {approveStatus !== ApprovalState.APPROVED ? (
                <Button
                  disabled={approveStatus !== ApprovalState.NOT_APPROVED}                  
                  onClick={approve}
                  variant='outlined' 
              style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 170px', textAlign:'center', whiteSpace:'nowrap', marginTop: '1rem' }}
                >
                  <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize'}}>
                    Approve BSHARE
                  </Typography>
                </Button>
              ) : (
                <>
                <Button onClick={onPresentDeposit} variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginRight:'0.5rem', whiteSpace:'nowrap' }}>
                  <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center' }}>
                    Deposit<BsFillArrowUpCircleFill style={{paddingLeft:'0.5rem'}}/>
                  </Typography>
                </Button>
                <Button disabled={!canWithdrawFromBoardroom} onClick={onPresentWithdraw} variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginLeft:'0.5rem', whiteSpace:'nowrap' }}>
                  <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize',}}>
                    Withdraw<BsArrowDownCircleFill style={{paddingLeft:'0.5rem'}}/>
                  </Typography>
                </Button>                  
                </>
              )}
            
            <Button 
              onClick={onReward}
              className={earnings.eq(0) || !canClaimReward ? 'shinyButtonDisabled' : 'shinyButton'}
              disabled={earnings.eq(0) || !canClaimReward}
              variant='outlined' 
              style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 170px', textAlign:'center', whiteSpace:'nowrap', marginTop: '1rem' }}
            >
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