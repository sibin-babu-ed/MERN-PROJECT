const express=require('express')
const dotenv=require('dotenv')
const Router=require('./routs/route.js')
const app=express()
const Connection=require('./database/db.js')
const cors=require('cors')
const bodyParser=require('body-parser')
app.use(cors())
dotenv.config();
const  port=8000
app.get('/',(req,res)=>{
    res.send('Welcome')
})
app.use(bodyParser.json({limit: '50mb',extended:true}))
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}))
app.use(express.json())
app.use('/',Router)
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);
app.listen(port,()=>console.log(`this port is ${port}`))
