import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Emp=()=>  {
  const[data,setData]=useState([]);

  useEffect(()=>{
    axios.get("https://dummyjson.com/users").then((res)=>{
      console.log(res.data.users)
      setData(res.data.users);
    }).catch((err)=>{console.log(err)})
},[])

  return (
    <div> <br></br>
    <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{backgroundColor:"blanchedalmond"}} >
        <TableHead style={{backgroundColor:'burlywood'}} >
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell  align="right">Age</TableCell>
            <TableCell align="right">Place</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {row.firstName}
              </TableCell>
              <TableCell component="th" scope="row"> {row.lastName}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.address.city}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
export default Emp