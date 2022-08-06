import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const ProductCards = () => {



  return (
    <Card sx={{ maxWidth: 200 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        maxHeight="80"
        image="https://cdn3.volusion.com/djqrj.kxptz/v/vspfiles/photos/JH-GUAVA-Peach-2.jpg?v-cache=1656865200"
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Product Info
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  
    );
}

export default ProductCards