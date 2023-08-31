import React from 'react'
import cartcontext from '../../context/Cartcontext';
import { useContext } from 'react';
import { Button, Container, Stack } from '@mui/material';
import { useEffect } from 'react';
export default function Cart() {
    const CartItem=useContext(cartcontext);
  const {cartitem}=CartItem
  
  const handleorder = async () => {
    const productdata = { name, price: +price, image, description };
    const response = await fetch("https://ecom-be-one.vercel.app/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          `Bearer ${token}`,
      },
      body: JSON.stringify(productdata),
    });
    console.log(response);
  };
  useEffect(() => {
    const user=localStorage.getItem('user');
if(!user){
  navigate("/login")
}
  })
  return (
    <>
    
    {cartitem.length!=0?cartitem.map((items)=>{
      
      return(
        <>
        <Stack spacing={2} style={{display:"flex",justifyContent:"center",marginTop:"10px",padding:"10px"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>

            <div><img src={items.image} height={"200"} /></div>

            <div style={{fontFamily:"cursive",marginBottom:"10px"}}>{items.name}</div>
            <div>Rs.{items.price}</div>
            </div>
            <Button onClick={handleorder} >Proceed to Checkout</Button>
          </Stack>
            </>
            
            )
          
          }):<>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
<img style={{maxHeight:"80vh",maxWidth:"100vw",}} src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" alt="" />
    <h1 style={{position:"absolute",fontFamily:"cursive"}}>Your ECart is empty </h1>
    </div>
    </>}
    
          
    </>


    
  )
}
