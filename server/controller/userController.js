const User=require('../model/user.js')
const signupUser=async(request,response)=>{
    try{
        console.log("try sighnup")
        const user=request.body
        console.log(user)
        const newUser=new User(user)
        await newUser.save()
        return response.status(200).json({msg:'Signup success'})
    }
    catch(error){
        console.log("here in error")
        return response.status(500).json({msg:'error while signup'})
    }
    }
    const loginUser=async(request,response)=>{
        let user=await User.findOne({username:request.body.username})
        if(!user){
            return response.status(400).json({msg:'username doesnot exit'})
        }
      try{
        if(request.body.password===user.password){
            response.status(200).json({msg:'password matched','username':request.body.username})
        }
      }
      catch(error){
        response.status(500).json({msg:'error while login'})
      }
    }
    module.exports={signupUser,loginUser}
