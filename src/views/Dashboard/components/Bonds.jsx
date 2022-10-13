import React, { useMemo, useCallback } from 'react'
import bonds from '../assets/bonds.svg'
import { Box, Grid, Typography, Button } from '@material-ui/core'
import useBondStats from '../../../hooks/useBondStats';
import useWallet from 'use-wallet';
import useBombFinance from '../../../hooks/useBombFinance';
import BondCard from './BondButton'
import useBondsPurchasable from '../../../hooks/useBondsPurchasable';
import useCashPriceInLastTWAP from '../../../hooks/useCashPriceInLastTWAP';
import { useTransactionAdder } from '../../../state/transactions/hooks';
import useApprove from '../../../hooks/useApprove';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN } from './../../../bomb-finance/constants';
import { getDisplayBalance } from '../../../utils/formatBalance';
import useTokenBalance from '../../../hooks/useTokenBalance';


const Bonds = () => {

  const bondStat = useBondStats();
  const bombFinance = useBombFinance();
  const bondsPurchasable = useBondsPurchasable();
  const addTransaction = useTransactionAdder();
  const cashPrice = useCashPriceInLastTWAP();
  const bondBalance = useTokenBalance(bombFinance?.BBOND);

  const {account} = useWallet();
  const {
    contracts: {Treasury},
  } = useBombFinance();

  const isBondRedeemable = useMemo(() => cashPrice.gt(BOND_REDEEM_PRICE_BN), [cashPrice]);
  const isBondPurchasable = useMemo(() => Number(bondStat?.tokenInFtm) < 1.01, [bondStat]);
  const handleBuyBonds = useCallback(
    async (amount) => {
      const tx = await bombFinance.buyBonds(amount);
      addTransaction(tx, {
        summary: `Buy ${Number(amount).toFixed(2)} BBOND with ${amount} BOMB`,
      });
    },
    [bombFinance, addTransaction],
  );

  const handleRedeemBonds = useCallback(
    async (amount) => {
      const tx = await bombFinance.redeemBonds(amount);
      addTransaction(tx, {summary: `Redeem ${amount} BBOND`});
    },
    [bombFinance, addTransaction],
  );

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
            <img src={bonds} alt='bomb' style={{height: '35px', width:'35px'}} />
            {getDisplayBalance(bondBalance)}
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
              <BondCard 
                action="Purchase"
                fromToken={bombFinance.BOMB}
                fromTokenName="BOMB"              
                priceDesc={
                  !isBondPurchasable
                    ? 'BOMB is over peg'
                    : getDisplayBalance(bondsPurchasable, 18, 4) + ' BBOND available for purchase'
                }
                onExchange={handleBuyBonds}
                disabled={!bondStat || isBondRedeemable}
              />              
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
              <BondCard 
                action="Redeem"
                fromToken={bombFinance.BBOND}
                fromTokenName="BBOND"
                toToken={bombFinance.BOMB}
                toTokenName="BOMB"
                priceDesc={`${getDisplayBalance(bondBalance)} BBOND Available in wallet`}
                onExchange={handleRedeemBonds}
                disabled={!bondStat || bondBalance.eq(0) || !isBondRedeemable}
                disabledDescription={!isBondRedeemable ? `Enabled when 10,000 BOMB > ${BOND_REDEEM_PRICE}BTC` : null}
              />
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Bonds