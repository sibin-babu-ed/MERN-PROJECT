import React ,{useEffect, useState}from 'react'
import { Box, styled, Typography, TextField,Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




const API_URL='http://localhost:8000'


const axiosInstances= axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "content-type":"application/json"
    }
})
const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;
const Component = styled(Box)`
    width: 700px;
    margin: auto;
    margin-top:100px;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const PostInitial={
    title:'',
    description:'',
    username:'',
    catagories:'',
    CreatedDate:'',
    picture:''


}


const Updatepost = () => {
    console.log("In side Update component")
    const location=useLocation()
    const navigate=useNavigate()
    const [Post,getPost]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            let response=await axiosInstances.get(`/post/${location.state}`)
            getPost(response.data)
        }
        fetchData()
    },[])
    const onInputChange=(e)=>{
        
        getPost({...Post,[e.target.name]:e.target.value})
    }
    const UpdatePost=async()=>{
        const response=await axiosInstances.put(`/update/${location.state}`,Post)
        if(response.status===200){
                navigate('/')
        }
    }
    function convertToBase64(file){
      return new Promise((resolve,reject)=>{
        const filereader=new FileReader()
        filereader.readAsDataURL(file)
        filereader.onload =()=>{
          resolve(filereader.result)
        }
          filereader.onerror =(error)=>{
            reject(error)
          }
        })
      
    }
    const HandleFileUpload=async(e)=>
    {
      const file=e.target.files[0]
      const base64=await convertToBase64(file);
      console.log(base64)
      getPost({...Post,picture:base64})
    }
  return (
<Component>
    
    <Wrapper>
    <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Title</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            /*startAdornment={<InputAdornment position="start">$</InputAdornment>}*/
            label="Title"
            name="title"
            value={Post.title}
            onChange={(e)=>onInputChange(e)}
            
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} >
          <InputLabel htmlFor="outlined-adornment-amount">Image</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            type='file'
            /*startAdornment={<InputAdornment position="start">$</InputAdornment>}*/
            label="Image"
            name="picture"
            accept='.jpeg,.png,.jpg'
            onChange={(e)=> HandleFileUpload(e)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            /*startAdornment={<InputAdornment position="start">$</InputAdornment>}*/
            label="Description"
            name="description"
            value={Post.description}
            onChange={(e)=>onInputChange(e)}
          />
        </FormControl>
        
        <FormControl fullWidth sx={{ m: 1 }} >
          <InputLabel htmlFor="outlined-adornment-amount">Category</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            
            /*startAdornment={<InputAdornment position="start">$</InputAdornment>}*/
            label="Category"
            name="catagories"
            value={Post.catagories}
            onChange={(e)=>onInputChange(e)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} >
          <InputLabel htmlFor="outlined-adornment-amount">UserName</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            
            /*startAdornment={<InputAdornment position="start">$</InputAdornment>}*/
            label="UserName"
            name="username"
            value={Post.username}
            onChange={(e)=>onInputChange(e)}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }} >
          <InputLabel htmlFor="outlined-adornment-amount">Created Date</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            
            /*startAdornment={<InputAdornment position="start">$</InputAdornment>}*/
            label="Created Date"
            name="CreatedDate"
            type="date"
            value={Post.CreatedDate}
            onChange={(e)=>onInputChange(e)}
          />
        </FormControl>
        
        
        <Button variant="contained" onClick={()=> UpdatePost(`${location.state}`)}>Update Post</Button>
        
    
    </Wrapper>
    </Component>

  )
}

export default Updatepost
