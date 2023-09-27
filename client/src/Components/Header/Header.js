import React from 'react'
import { AppBar,Toolbar,styled } from '@mui/material'
import { Link } from 'react-router-dom'
const Component=styled(AppBar)
`
background-color:#FFFFFF;
color:black;
`
const Container= styled(Toolbar)`
Justify-content:center;
& > a{
    padding:20px;
    color:#000;
    text-decoration:nun
}
`
const Header = () => {
  return (
    <Component><Container> 
        <Link to='/'>Home</Link>
        <Link to='/about'>Aboutus</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/account'>Logout</Link>
     </Container></Component>
  )
}

export default Header
