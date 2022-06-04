import { Box,Grid,styled } from '@mui/material'           //grid is used to make website responsive, for all displays (more no. for small displays)
import React from 'react'
import {imageUrl } from "../../Constants/data.js";

const Wrapper = styled(Grid)`
    margin-top:10px;
    justify-content : space-between;
`

const Image = styled("img")(({theme})=>({
    marginTop:10,
    width:"100%",
    display:"flex",
    justifyContent : "space-between",
    [theme.breakpoints.down("md")]:{
        objectFit:"cover",
        height:"120px"
    }
}))
export default function MidSection() {
    const url = "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50"
  return (
      <>
   <Wrapper lg = {12} sm = {12} md = {12} xs ={12} container >
       {
           imageUrl.map(image=>(
               <Grid item lg = {4} md = {4} sm ={12} xs= {12}>
               <img src ={image} alt ="image" style = {{width:"100%"}} />
               </Grid>
           ))


       }

   </Wrapper>
   <Image src ={url} alt = "covid19 "/>
   </>
  )
}
