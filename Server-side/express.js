const express = require('express');
const cors = require('cors')

const userRoute = require('./route/userRoute')
const accountRouter = require('./route/accountRoute')
const app  = express()
app.use(express.json())
app.use(cors())
require('dotenv').config()

const Port  = process.env.PORT

app.use('/',userRoute);
app.use('/',accountRouter)



app.listen(Port,(err)=>{
    if(err){
        console.log('error happend on the server Running')
    }
    else{
        console.log('Server is Successfully running')
    }
})

