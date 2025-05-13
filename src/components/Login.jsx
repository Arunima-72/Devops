import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
  const[val,setVal]=useState({})
  const inputHandler=(e)=>{
    setVal({...val,[e.target.name]:e.target.value})
    console.log(val);
  }
  const submitHandler=(e)=>{
   axios.post('https://dummyjson.com/users/add',val).then((res)=>{
    console.log(res)}).catch((err)=>{console.log(err)})
  }
  return (
    <div style={{marginTop:'10%',marginLeft:'40%'}} >
       <div>
           <TextField variant='outlined'  size='normal' color='warning'label='firstname' name='firstName'
           value={val.firstName}
             onChange={inputHandler}></TextField>
           
           </div>
           <br></br>
           <div>
           <TextField variant='outlined' color='warning'label='lastname' name='lastName'
            value={val.lastName} onChange={inputHandler}></TextField>

           </div>
           <br></br>
  <Button color="warning" variant='contained' onClick={submitHandler}>Login</Button>
    </div>
  )
}

export default Login
