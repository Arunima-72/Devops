import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import React from 'react'
import { Link, Links } from 'react-router-dom'

const Home = () => {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='orange' position="static"  >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="orange"
          aria-label="menu"
          sx={{ mr: 2,backgroundColor:"#ff6d00" }}
        >
         
        </IconButton>
        <Typography variant="h4" component="div"  sx={{ flexGrow: 1 ,fontFamily:'cursive',color:'orange'}}>
        Foodies
        </Typography>
        <Link to= {'/signup'}><Button style={{color:'goldenrod'}}>Sign up</Button></Link>
      <Link to={'/login'}> <Button style={{color:'goldenrod'}}>Login</Button></Link> 
      <Link to={'/'}>   <Button style={{color:'goldenrod'}}>Home</Button></Link>
      <Link to={'/card'}>    <Button style={{color:'goldenrod'}}>Food</Button></Link>
       
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Home
