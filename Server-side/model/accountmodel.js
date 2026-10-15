const db = require('../db')

const createAccount = (user_id,account,callback) =>{
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

const getAllacount = (callback) =>{
    
    const sql =`SELECT * FROM account`

    db.query(sql,callback)
};


const getaccountById = (id,callback) =>{
    
    const sql  = `SELECT * FROM account WHERE id = ?`

    db.query(sql,[id],callback)
}

const updateAccount = (email,account,callback) =>{
    const {user_id, account_number ,account_type , balance , status,created_at} =account
    const sql =`UPDATE account SET 
                                  user_id = ?,
                                  account_number = ?,
                                  account_type = ?,
                                  balance = ?,
                                  status = ?,
                                  created_at  = ?
                            WHERE id =?
    
    `
    const values = [
        user_id,
        account_number,
        account_type,
        balance,
        status,
        created_at

    ]

    db.query(sql,[email],values,callback)
}

const getaccountByEmail = (email,callback) =>{
    const sql = `SELECT * FROM account WHERE email = ?`

    db.query(sql,[email],callback)
}

const deletaccount = (id,callback) =>{
    const sql = `DELETE * FROM account WHERE id = ?`

    db.query(sql,[id],callback)
}

module.exports = {
  createAccount,
  getAllacount,
  getaccountById,
  getaccountByEmail,
  updateAccount,
  deletaccount
}