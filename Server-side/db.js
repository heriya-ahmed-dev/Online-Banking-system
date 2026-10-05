const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection({
    host : process.env.db_HOST,
    password : process.env.db_PASSWORD,
    user: process.env.db_USER,
    database : process.env.db_NAME
})

db.connect((err)=>{
    if(err){
        console.log('Errror happened on the data base connection',err)
    }
    else{
        console.log('Data base is successfully connected!!!')
    }
})

module.exports = db