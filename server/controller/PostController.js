const { request, response } = require('express')
const Post=require('../model/post.js')
const CreatePost=async(request,response)=>{
    try{
        //const post1=request.body
        console.log(request.body)
        const post=await new Post(request.body)
        post.save()
        //await post.save()
        //const post=await new Post(post1)

        //post.save()

        response.status(200).json('Post saved sucessfully')
    }
    catch(error){
        response.status(500).json('error')
    }
}
const getAllposts =async(request,response)=>{
    console.log("fetch all data")
    try{
        let posts=await Post.find({})
        console.log(posts)
        response.status(200).json(posts)
    }
    catch(error){
        response.status(500).json(error)
    }
}
 
const UpdatePost=async (request,response)=>{
    try{
        const post=await Post.findById(request.params.id)
        console.log("post in update",post)
        if(!post){
            response.status(404).json({msg:'post not found'})
        }
        await Post.findByIdAndUpdate(request.params.id, { $set: request.body})
        response.status(200).json('post updated successfully')
    }
    catch(error){
        response.status(500).json(error)
    }
    }
const getPost=async(request,response)=>{
    try{
        const post=await Post.findById(request.params.id)
        console.log(post)
        response.status(200).json(post)
    }
    catch(error){
        response.status(500).json(error)
    }
}
const deletePost=async(request,response)=>{
    try{
        const post=await Post.findById(request.params.id)
        await Post.deleteOne(post)
        response.status(200).json("post deleted sucessfully")
    }
    catch(error){
        response.status(500).json(error)
    }
}

module.exports={CreatePost,getAllposts,UpdatePost,getPost,deletePost}