import React, { useEffect, useState } from 'react'
import { Box,Button,Grid,styled } from '@mui/material'
import Banner from '../Banner/banner'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Post from '../Posts/Post';

const API_URL = 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000, 
    headers: {
        "content-type": "application/json"
    }
});


const Btn = styled(Button)`
margin:30px;
    width:200px;
    height:30px;
    color:white;
    position:absolute;
    left:0;
    top:320px;
`;
const Home = () => {
  const navigate=useNavigate()
  const [posts,getPosts]=useState([]);
  useEffect (()=>{
    const fetchData=async ()=>{
      let response=await axiosInstance.get("/posts")
      getPosts(response.data)
    }
    fetchData()
  },[])
  return (
    <Box>
    <Banner/>
    <Btn variant="contained" onClick={()=>navigate('/addpost')} >Add Blog</Btn>
    <Grid container item xs={20} ml={20} mt={10} sm={10} lg={10}>
      {
        posts.length? posts.map((post,id)=>{
          return(
            <Grid item lg={3} sm={4} xs={12}>
            <Post post={post} key={post._id}/></Grid>
          )
        }):
        <Box>No data is available to show</Box>
      }
    </Grid>
       
    </Box>
  )
}


export default Home
