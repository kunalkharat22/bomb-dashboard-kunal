import React from 'react'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import useBombFinance from '../../../hooks/useBombFinance';
import useApprove, {ApprovalState} from '../../../hooks/useApprove';
import useCatchError from '../../../hooks/useCatchError';
import useModal from '../../../hooks/useModal';
import ExchangeModal from '../../Bond/components/ExchangeModal';
import useTokenBalance from '../../../hooks/useTokenBalance';

const BondCard = ({
  action,
  fromToken,
  fromTokenName,
  priceDesc,
  onExchange,
  disabled = false,
  disabledDescription,
}) => {
  const catchError = useCatchError();
  const {
    contracts: {Treasury},
  } = useBombFinance();
  const [approveStatus, approve] = useApprove(fromToken, Treasury.address);
  const balance = useTokenBalance(fromToken);
  const [onPresent, onDismiss] = useModal(
    <ExchangeModal
      title={action}
      description={priceDesc}
      max={balance}
      onConfirm={(value) => {
        onExchange(value);
        onDismiss();
      }}
      action={action}
      tokenName={fromTokenName}
    />,
  );


  return (
    <>
      {approveStatus !== ApprovalState.APPROVED && !disabled ? (
                <Button
                  variant='outlined' 
                  style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginleft:'10rem', whiteSpace:'nowrap'  }}
                  disabled={approveStatus === ApprovalState.PENDING || approveStatus === ApprovalState.UNKNOWN}
                  onClick={() => catchError(approve(), `Unable to approve ${fromTokenName}`)}
                >
                  <Typography variant='body1' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center', }}>
                    {`Approve ${fromTokenName}`}
                  </Typography>                  
                </Button>
              ) : (
                <Button
                  className={disabled ? 'shinyButtonDisabled' : 'shinyButton'}
                  onClick={onPresent}
                  disabled={disabled}
                >
                  {disabledDescription || action}
                </Button>
              )}



      {/* <Button variant='outlined' style={{width: '107px', height:'30px', border: '2px solid #fff', borderRadius: '40px', padding: '20px 80px', marginleft:'10rem'  }}>
          <Typography variant='h5' style={{color: '#fff', textTransform: 'capitalize', textAlign: 'center', }}>
               Purchase
          </Typography>
      </Button> */}
    </>
  )
}

export default BondCard