const mongoose=require('mongoose')
//import mongoose from "mongoose";
const PostSchema =mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    username:{
        type:String
    },
    catagories:{
        type:String
    },
    CreatedDate:{
        type:Date
    },
    picture:{
        type:String,
    }

});

const post=mongoose.model('post',PostSchema)

//export default postes
module.exports=post