import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    const[my_name,setName]=useState('Anu')
    const [count,setCount]=useState(0);

    function changeName() {
        setName('Arunima');
        
    }
    function counter() {
        setCount(count+1);
    }
  return (
    <div style={{marginTop:'10%',marginLeft:'40%'}}>
        <h4>Welcome {my_name}  to ReactJs Programming</h4>
        <div >
     <TextField variant='outlined' color='warning'label='Full Name'></TextField>
     </div>
     <br></br>
     <div>
     <TextField variant='outlined' color='warning'label='Email'></TextField>
     </div>
     <br></br>
     <div>
     <TextField variant='outlined' color='warning'label='Password'></TextField>
     </div>
     <br></br>
     <div>
     <TextField variant='outlined' color='warning'label='Phone Number'></TextField>
    </div><br></br>
  <Button color="warning" variant='contained' onClick={changeName} >Sign up</Button>
  
  <Button color="success" variant='contained' onClick={counter} >Count</Button>
  <p> The count button was clicked{count}</p>


    </div>
    
  )
}

export default Signup
