const mongoose=require('mongoose')
const Connection= async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.u2xdae3.mongodb.net/`

        try{
            await mongoose.connect(URL,{ useNewUrlParser:true })
            console.log('database connected succesfully')
        }
        catch(error){
            console.log('error while connecting to database',error)
        }
}
module.exports=Connection;