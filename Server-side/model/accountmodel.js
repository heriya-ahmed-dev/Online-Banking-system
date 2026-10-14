const db = require('../db')

const createAccount = (account,callback) =>{
    const sql = `INSERT INTO account  
                 (user_id , account_number ,account_type , balance , status,created_at)
                 VALUES(?,?,?,?,?,?)
                 `
    const {user_id , account_number ,account_type , balance , status,created_at} = account
    const  values = [
                  user_id , 
                  account_number ,
                  account_type , 
                  balance , 
                  status,
                  created_at
                ]
    db.query(sql,values,callback)
}

module.exports = {
    createAccount
}