import React, {useMemo} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import MetamaskIcon from '../assets/MetaMask_Fox.svg'
import { Typography } from '@material-ui/core';
import bshare from '../assets/bshare.svg'
import bomb from '../assets/bomb.svg'
import bonds from '../assets/bonds.svg'
import useBombStats from './../../../hooks/useBombStats';
import usebShareStats from './../../../hooks/usebShareStats';
import useBondStats from './../../../hooks/useBondStats';

import { roundAndFormatNumber } from '../../../0x';
import millify from 'millify'


function removeCommas(str) {
  var a=str
  a=a.replace(/\,/g,'')
  a=parseInt(a,10)
  return a;
}

function createData(icon,token, currentSupply, totalSupply, price) {
    return { icon,token, currentSupply, totalSupply, price };
  }
  
  
export default function Table() {

  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombPriceInDollars = useMemo(() => (bombStats ? Number(bombStats.priceInDollars).toFixed(4) : null), [bombStats])
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);
  const bsharePriceInDollars = useMemo(() => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(4) : null), [bShareStats])
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);
  const tBondPriceInDollars = useMemo(() => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(4) : null), [tBondStats])


  const rows = [
    createData(
      bomb,
      '$BOMB', 
      millify(removeCommas(roundAndFormatNumber(bombCirculatingSupply, 2))), 
      millify(removeCommas(roundAndFormatNumber(bombTotalSupply, 2))), 
      millify((bombPriceInDollars ? bombPriceInDollars : '-.----'),{precision:2})
      ),
    createData(
      bshare,
      '$BSHARE', 
      millify(removeCommas(roundAndFormatNumber(bShareCirculatingSupply, 2))), 
      millify(removeCommas(roundAndFormatNumber(bShareTotalSupply, 2))), 
      millify((bsharePriceInDollars ? bsharePriceInDollars : '-.----'),{precision:2})
      ),
    createData(
      bonds,
      '$BBOND', 
      millify(removeCommas(roundAndFormatNumber(tBondCirculatingSupply, 2))), 
      millify(removeCommas(roundAndFormatNumber(tBondTotalSupply, 2))), 
      millify((tBondPriceInDollars ? tBondPriceInDollars : '-.----'),{precision:2})
      ),
  ];

  return (
    <MDBTable style={{marginTop: '2rem', borderSpacing: '15px'}}>
      <MDBTableHead>
        <tr>
          <th scope='col'></th>
          <th scope='col'></th>
          <th scope='col'>
          <Typography variant='body2'>
            Current supply
            </Typography>
          </th>
          <th scope='col'>
            <Typography variant='body2'>
              Total Supply
            </Typography>  
            </th>
          <th scope='col'>
            <Typography variant='body2'>
              Price
            </Typography> 
          </th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {rows.map((row) => (
        <tr key={row.token}>
          <th scope='row' align='right'>
            <Typography variant='subtitle1' style={{color: 'white',}}>
              <img src={row.icon} alt='bomb' style={{height: '25px', width:'25px', backgroundColor: 'rgba(55, 55, 71, 1)', borderRadius: '50%'}} />
            </Typography>
          </th>
          <td align='left'>
            <Typography variant='subtitle1' style={{color: 'white',}}>
               {row.token}
            </Typography>
          </td>
          <td>
            <Typography variant='h6' style={{color: 'white',}}>
               {row.currentSupply}
            </Typography>
          </td>
          <td>
            <Typography variant='h6' style={{color: 'white',}}>
              {row.totalSupply}
            </Typography>
          </td>
          <td>
            <Typography variant='h6' style={{color: 'white',}}>
               ${row.price}
            </Typography>
          </td>
          <td align="right">
            <img src={MetamaskIcon} style={{width: 30, height: 30}}/>  
          </td>
          
        </tr>
      ))}
      </MDBTableBody>
    </MDBTable>
  );
}