
const usermodel = require('../model/usermodel')

const CreateUser = (req,res) =>{

     const user = req.body

    usermodel.CreateUser(user,(err,result)=>{
        if(err){
            res.status(400).send({
                message:"Error happened on the user creating"
            })
            console.log('Error happened on the user creating',err)
        }
        res.send(result)
    })
}

const GetAllUser = (req,res) =>{
    usermodel.GetAllUser((err,result)=>{
        if(err){
            console.log('Error happened on the getting all users')
        }
        res.send(result)
    })
}

const GetUserById = (req,res) =>{
    const {id} = req.params

    usermodel.GetUserById(id,(err,result)=>{
        if(err){
            console.log('Error happened during get User by Id: ',err)
        }
        res.send(result)
    })
}

const GetUserByEmail = (req,res) =>{
    const {email} = req.params

    usermodel.getUserByEmail(email,(err,result)=>{
        if(err){
            console.log('Error happened during getting data by email',err)
        }
        res.send(result)
    })
}
const GetUserByPassword = (req,res) =>{
    const {password} = req.params

    usermodel.GetUserByPassword(password,(err,result)=>{
        if(err){
            console.log('Error happened on the getting data by password',err)
        }
        res.send(result)
    })
}

const UpdateUser = (req,res) =>{
  const {id} = req.params;
  const user = req.body;
  
  usermodel.updateUser(user,id,(err,result)=>{
    if(err){
        console.log('Error happened during data updating')
    }
    res.send(result)
  })
}
const DeleteUser = (req,res) =>{
    const {id} = req.params;

    usermodel.DeleteUser(id,(err,result)=>{
        if(err){
            console.log('Error happened during deleting of User',err)
        }
        res.send(result)
    })
}

module.exports = [
    CreateUser,
    GetAllUser,
    GetUserByEmail,
    GetUserById,
    GetUserByPassword,
    UpdateUser,
    DeleteUser
]
