const express = require('express');
const cors = require('cors')

const app  = express()
app.use(express.json())
app.use(cors())

const Port  = process.env.PORT


app.listen(Port,(err)=>{
    if(err){
        console.log('error happend on the server Running')
    }
    else{
        console.log('Server is Successfully running')
    }
})
