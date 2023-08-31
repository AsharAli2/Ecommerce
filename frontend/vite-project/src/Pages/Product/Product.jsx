import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Container,
  Button,
  Rating,
  Typography,
  CardActions,
  CardMedia,
  IconButton,
} from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

import cartcontext from "../../context/Cartcontext";
import { useContext } from "react";
import { useState,useEffect } from "react";



export default function Product() {
  const navigate=useNavigate()
  const [Loading, setLoading] = useState(false);
  const [user, setuser] = useState(null)
  const [SingleProduct,setSingleProduct]=useState({})
  const Cartcontext=useContext(cartcontext);
  const {cartitem,addtoCart,removecart}=Cartcontext;
  
  let { id } = useParams();
  const token=JSON.parse(localStorage.getItem('token'))
  const fetchsingleproduct=async()=>{
    setLoading(true) 

    const response=await fetch(`https://ecom-be-one.vercel.app/products/${id}`)
    const data=await response.json()
    console.log(data.product);
    setSingleProduct(data.product)
    setLoading(false) 

  }
  
  useEffect(() => {
    fetchsingleproduct();
    const isUser=localStorage.getItem('user')
    if(isUser){
      setuser(isUser)
    }
  }, [])
  const handledelete=async()=>{
    const response=await fetch(`https://ecom-be-one.vercel.app/products/${id}`,{
      method:"DELETE",
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    const data=await response.json()
    navigate('/')
    
  }
  return (
    <>
      <Container style={{}}>
      {Loading? <>
      <Skeleton variant="circular" width={250} height={250} />
        </>:
        <>
        {user?
        <div style={{marginTop:"10px",display:"flex",justifyContent:"center"}}>
          <IconButton  onClick={()=>navigate(`/products/edit/${id}`)}><EditIcon sx={{ fontSize: 40,color:"red" }}/></IconButton>
          <IconButton onClick={handledelete}><DeleteIcon sx={{ fontSize: 40,color:"black" }}/></IconButton>
        </div>:<></>
        }
        <div
        className="Parent"
        style={{
          display: "flex",
          marginTop:"10px"
          }}
          >
          {/* <div className="Child"> */}
          <CardMedia
                    sx={{ height: 300, width: 450 }}
                    image={SingleProduct.image}
                    title="green iguana"
                    />
                    {/* </div> */}
          <div
            className="child"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
             marginLeft:"10px"
            }}
            >
            <h3>{SingleProduct.name}</h3>
            <p style={{ color: "blue" }}>{SingleProduct.description}</p>
            <Typography component="legend"></Typography>
            <Rating name="read-only" value={4} readOnly />
            <div style={{ color: "green", padding: "8px", fontSize: "20px" }}>
              Rs.{SingleProduct.price}
            </div>
            <CardActions>
              <Button
                size="large"
                style={{
                  color: "white",
                  border: "2px solid blue",
                  backgroundColor: "blue",
                }}
                onClick={()=>addtoCart(SingleProduct)}
                >
                AddToCart
              </Button>
              <Button
                size="large"
                style={{
                  color: "white",
                  border: "2px solid red",
                  backgroundColor: "red",
                }}
                onClick={()=>removecart(SingleProduct.name)}
                >
                Remove
              </Button>
            </CardActions>
          </div>
        </div>
                </>
    }
      </Container>
      </>
  );
}
