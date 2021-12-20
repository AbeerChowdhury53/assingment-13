// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';



export default function Ordertable() {
  const { user, logout } = useAuth()
console.log(user.email)
const [orders, setOrdes]= useState([]);
 console.log(orders)

const result =  orders.filter(order => order.email == user.email )
console.log(result)

useEffect(()=>{
    fetch('https://limitless-island-82895.herokuapp.com/order')
    .then(res => res.json())
    .then(data => setOrdes(data))
},[result])
  return (
   
    <TableContainer component={Paper}>
          <h3>All Order</h3>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
  
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Image</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell width='10%'  align="right">{row.Price}</TableCell>
              <TableCell width="30%" align="right">{row.assress}</TableCell>
              <TableCell width="30%" align="right">{row.Mobile}</TableCell>              
              <TableCell width="60%" align="right"><img width='30%' src={row.image}  alt="" /></TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
