import * as React from 'react';

import { Card, CardContent, Grid, Typography,CardMedia} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Form = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://dummyjson.com/users").then((res)=>{
      console.log(res.data.users)
      setData(res.data.users);
    }).catch((err)=>{console.log(err)})
  },[])

  // function createData(name, description,image) {
  //   return { name,description, image};
  // }
  
  // const rows = [
  //   createData('Indian', 'Rich in spices and full of flavors.','/images/indian.avif'),
  //   createData('Chinese', 'Noodles, dumplings, and stir-fried dishes.','/images/chinese.jpg'),
  //   createData('Italian', 'Famous for pasta, pizza, and creamy sauces.','/images/itali.jpg'),
  //   createData('Japanese', 'Fresh sushi, ramen, and tempura.','/images/japanese.jpg'),
  //   createData('Thai', 'Sweet, spicy, and sour blends in every dish.','/images/thai.jpg'),
  // ];
  return (
    
    
<Grid  container spacing={3} padding= {3}>
  {data.map((row,index)=>(
     <Grid item xs={12} sm={6} md={4} key={index}>
      <Card sx={{ maxWidth: 300}} border="1px solid blue" style={{backgroundColor:'beige'}}>
      
      <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'cursive',color:'rosybrown'}}>
              
                <img src={row.image} alt={row.firstName} style={{width:'30%',height:'10%'}}/>
                {row.firstName} {row.lastName} 
              </Typography>
              {/* <Typography gutterBottom variant="h5" component="div">
                {row.lastName}
              </Typography> */}
              <Typography variant="body2" color="text.secondary" style={{fontFamily:'cursive',color:'purple'}}>
                {row.age}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{fontFamily:'cursive',color:'purple'}}>
                {row.address.city}
              </Typography>

            </CardContent>

      </Card>
     </Grid>
  
  ))}
   </Grid>  
          
  );
}


export default Form;
