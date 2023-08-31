import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home/Product.css";
import {
  Button,
  Stack,
  Card,

  CardMedia,
  Typography,
  Container,
  MenuItem,
  Rating,
} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';


export default function Productall() {
   const [isLoading, setIsLoading] = useState(false);
  const [Product, setProduct] = useState([])
const fetchproducts= async()=>{
  setIsLoading(true) 
  const response = await fetch('https://ecom-be-one.vercel.app/products/all')
  const data= await response.json();
  setProduct(data.Product);
  
  setIsLoading(false);

}
useEffect(() => {
  // setTimeout(() => {
    fetchproducts();
    
  // }, 500); 
}, []);

  return (
    <>
      <Container > 
        <div style={{display:"flex",justifyContent:"center"}}>

        <h1 style={{fontFamily:"monospace"}}>Estore Products</h1>
        </div>
        {isLoading? <>
      <Skeleton variant="rounded" width={200} height={200} />
        </>:null}
        <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">'
          {Product.map((item) => {
            return (
              <Link to={`/Products/${item._id}`}>
                <Card
                  sx={{
                    maxWidth: 200,
                    maxHeight: 300,
                  }}
                >
                  <CardMedia
                    sx={{ height: 200, width: 200 }}
                    image={item.image}
                    title="green iguana"
                  />
                  <MenuItem>
                    <Typography variant="inherit" noWrap style={{color:"blue"}}>
                      {item.name}
                    </Typography>
                  </MenuItem>
                  <Typography
                    variant="body2"
                    style={{
                      color: "green",
                      fontSize: "15px",
                      paddingLeft: "16px",
                    }}
                  >
                    Rs.{item.price}
                  </Typography>

                  <Typography component="legend" ></Typography>
      <Rating name="read-only" value={1+(Math.floor(Math.random()*5))} readOnly style={{paddingLeft: "10px",marginTop:"5px"}}/>
                </Card>
              </Link>
            );
          })}
        </Stack>
      </Container>
    </>
  );
}
