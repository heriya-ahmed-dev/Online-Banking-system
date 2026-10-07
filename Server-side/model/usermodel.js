const db = require('../db')

const createUser = (user,callback) =>{
    const {name,email,password,phone,address,role,status} = user;

    const sql = `INSERT INTO user 
                 (name,email,password,phone,address,role,status)
                 VALUES (?,?,?,?,?,?,?)
    `
    const values = [
        name,
        email,
        password,
        phone,
        address,
        role,
        status
    ]

    db.query(sql,values,callback)
} 

const getAllUser = (callback) =>{
   
    const sql = `SELECT * FROM user`

    db.query(sql,callback)
}

const getUserById = (id,callback) =>{
    
    const sql = `SELECT * FROM user WHERE id = ?`

    db.query(sql,[id],callback)
}

const getUserbyEmail = (email,callback) =>{

    const sql = `SELECT * FROM user WHERE email = ?`
   
    db.query(sql,[email],callback)

}

const getUserByPassword = (password,callback) =>{
    
    const sql = `SELECT * FROM user WHERE password = ?`

    db.query(sql,[password],callback)
}

const updateUser = (user,id,callback) =>{

    const {name , email, password,phone,address,role,status} = user
    const sql = `UPDATE user SET (name,email,password,phone,address,role,status)
                 WHERE id = ?
    `
    const values = [
        name,
        email,
        password,
        phone,
        address,
        role,
        status
    ]

    db.query(sql,values,[id],callback)
}

const deleteUser = (id,callback) =>{
    
    const sql = `DELETE user WHERE id = ?`

    db.query(sql,[id],callback)
}

module.exports = [
    createUser,
    getAllUser,
    getUserById,
    getUserByPassword,
    getUserbyEmail,
    updateUser,
    deleteUser
]