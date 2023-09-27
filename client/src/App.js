import React, { useState } from 'react'
import Login from './Components/Accounts/Login'
import { Route,Routes,Outlet,Navigate } from 'react-router-dom'
import Header from './Components/Header/Header'
import Aboutus from './Components/Aboutus/Aboutus'
import Contact from './Components/Contact/Contact'
import Home from './Components/home/Home'
import AddPost from './Components/Posts/AddPost'
import Updatepost from './Components/Update/Updatepost'

const App = () => {
  const [isAuthenticated, isUserAuthenticated]=useState(false)
  const PrivateRoute=({isAuthenticated})=>{
    return isAuthenticated?
    <>
    <Header/>
    <Outlet/>
    </>:<Navigate replace to ='/account'/> 
  }
  return (
    <div>
      <Routes>
        <Route path='/account' element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
        <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route path='/' element={<Home/>}/></Route>
        <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route path='/about' element={<Aboutus/>}/></Route>
        <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route path='/contact' element={<Contact/>}/></Route>
        <Route path='/addpost' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route path='/addpost' element={<AddPost/>}/></Route>
        <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
        <Route path='/update/:id' element={<Updatepost/>}/></Route>
        

      </Routes>
    </div>
  )
}

export default App
