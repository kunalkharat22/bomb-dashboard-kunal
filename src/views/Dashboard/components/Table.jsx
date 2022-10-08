// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Typography } from '@material-ui/core';
// import MetamaskIcon from '../assets/MetaMask_Fox.svg'
// import { color } from '@mui/system';

// function createData(token, currentSupply, totalSupply, price) {
//   return { token, currentSupply, totalSupply, price };
// }

// const rows = [
//   createData('$BOMB', 159, 6.0, 24, 4.0),
//   createData('$BSHARE', 237, 9.0, 37, 4.3),
//   createData('$BBOMB', 262, 16.0, 24, 6.0),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer >
      
//       <Table sx={{ minWidth: 400 }} aria-label="simple table">
//         <TableHead>
//           <TableRow >
//             <TableCell></TableCell>
//             <TableCell align="right">
//               <Typography variant='body2' style={{color: 'white',}}>
//                 Current supply
//               </Typography>
//             </TableCell>
//             <TableCell align="right">
//               <Typography variant='body2' style={{color: 'white',}}>
//                 Total Supply
//               </Typography>
//             </TableCell>
//             <TableCell align="right">
//               <Typography variant='body2' style={{color: 'white',}}>
//                 Price
//               </Typography>
//             </TableCell>
//             <TableCell align="right"></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } , color: 'fff'}}
              
//             >
//               <TableCell component="th" scope="row">
//                 <Typography variant='subtitle1' style={{color: 'white',}}>
//                 {row.token}
//                 </Typography>
//               </TableCell>
//               <TableCell align="right">
//               <Typography variant='h6' style={{color: 'white',}}>
//               {row.currentSupply}
//                 </Typography>
//                 </TableCell>
//               <TableCell align="right">
//                 <Typography variant='h6' style={{color: 'white',}}>
//                 {row.totalSupply}
//                   </Typography>
//                 </TableCell>
//               <TableCell align="right">
//                 <Typography variant='h6' style={{color: 'white',}}>
//                 {row.price}
//                 </Typography>
//                 </TableCell>
//               <TableCell align="right">
//                 <img src={MetamaskIcon} style={{width: 30, height: 30}}/>  
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }


import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import MetamaskIcon from '../assets/MetaMask_Fox.svg'
import { Typography } from '@material-ui/core';

function createData(token, currentSupply, totalSupply, price) {
    return { token, currentSupply, totalSupply, price };
  }
  
  const rows = [
    createData('$BOMB', 159, 6.0, 24, 4.0),
    createData('$BSHARE', 237, 9.0, 37, 4.3),
    createData('$BBOMB', 262, 16.0, 24, 6.0),
  ];

export default function Table() {
  return (
    <MDBTable style={{marginTop: '2rem', borderSpacing: '20px'}}>
      <MDBTableHead>
        <tr>
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
          <th scope='row' align='left'>
            <Typography variant='subtitle1' style={{color: 'white',}}>
               {row.token}
            </Typography>
          </th>
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
               {row.price}
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