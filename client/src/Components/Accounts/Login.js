import React, { useState } from 'react'
//import {Box} from '@mui/material';
import { TextField,Box,Button,styled,Typography } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const signupInitialValues={
  name:'',
  username:'',
  password:''
}
const logininitialvalues={
  username:'',
  password:''
}

const API_URL='http://localhost:8000'

const axiosInstance=axios.create({
      baseURL:API_URL,
      timeout:10000,
      headers:{
        "content-type":"application/json"
   }
})

const Component=styled(Box)`
    width:400px;
    margin:auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0 /0.6)
`

const imageURL='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
const Image=styled('img')({
  width:100,
  display:'flex',
  margin: 'auto',
  padding:'50px 0 0'
})
const Wrapper=styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    owerflow:auto;
    flex-direction:column;
    & > div, & > button, & >p{
      marin-top:20px;
    }
    `
 const SignupButton= styled(Button)`
    text-transform:null;
    background:#fff;
    color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0 /20%)
    ` 
  
  const Text=styled(Typography)`
  color:#878787;
  margin:10px;
  Font-size:12px;
  ` 
  const LoginButton=styled(Button)`
    text-transform:nun;
    background:#FB641b;
    color:#fff;
    height:48px;
    border-raius:2px;
  `

  const Login = (props) => {
    const isUserAuthenticated=props.isUserAuthenticated
    const [account,toggleAccount]=useState('login')
    const [signup,setSignup]=useState(signupInitialValues)
    const [login,setLogin]=useState(logininitialvalues)
    console.log(signup,login)
    const navigate=useNavigate()
    const toggleSignup=()=>{
      account==='signup'? toggleAccount('login'): toggleAccount ('signup')
    }


    const onInputChange=(e)=>{
      setSignup({...signup,[e.target.name]:e.target.value})
      
    }

    const onvalueChange=(e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
    }

    const loginuser=async()=>{
      
      let response=await axiosInstance.post('/login',login)
      if(response.status===200){
        isUserAuthenticated(true)
        navigate('/')
        console.log('login succesfulll')
      }
    }


    const signupUser=async()=>{
     const response=  await axiosInstance.post('/signup',signup)
     console.log(response)
     if(response.status===200){
      toggleAccount('login')
     }
    }
  return (
    <Component>
    <Image 
        src={imageURL} alt='pic'></Image>
        {account==='login'?
        <Wrapper>
           <TextField  id="outlined-basic" label="USERNAME" value={login.username} onChange={(e)=>{onvalueChange(e)}}
             name='username'  variant="standard"  />

           <TextField id="outlined-basic" label="PASSWORD" value={login.password}  onChange={(e)=>{onvalueChange(e)}}
            name='password'  variant="standard" />

           <LoginButton variant='contained' onClick={()=> loginuser()}>LOGIN</LoginButton>
           <Text style={{textAlign:'center'}}>OR</Text>
           <SignupButton variant="standard" onClick={()=>toggleSignup()} style={{marginbottom:50}}>Create an account</SignupButton>
        </Wrapper>:

      <Wrapper >
        <TextField  id="outlined-basic" label="Enter your name" variant="standard" value={signup.name} name='name' onChange={(e)=>onInputChange(e)} />
        <TextField  id="outlined-basic" label="USERNAME" variant="standard" value={signup.username} name='username' onChange={(e)=>onInputChange(e)} />
        <TextField id="outlined-basic" label="PASSWORD" variant="standard" value={signup.password} name='password' onChange={(e)=>onInputChange(e)} />
        <SignupButton variant="standard" onClick={()=>signupUser()}>SIGNUP</SignupButton>
        <Text style={{textAlign:'center'}}>OR</Text>
        <LoginButton variant='contained' onClick={()=>toggleSignup()}>Already have an account </LoginButton>
        </Wrapper>}

    </Component>
    
  )
}

export default Login
