
const Jwt  = require('jsonwebtoken')

const userservice = require('../service_layer/userservice');

 require('dotenv').config()

const ResiterUser = (req,res) =>{
    
    const user = req.body

    userservice.registerUser(user,(err,result)=>{
        if(err){
            console.log('Error happened in the user registeration on the controller',err)
            return res.status(404).json({
                message : 'Email is already registered!!!'
            })
        }
        console.log('Email is successfully registered!!!')
        return res.status(200).json({
            message : "Congratulations Email successfully registered!!!",
            result: result
        })
    })
}

const LoginUser = (req,res) =>{
    const user  =req.body

    userservice.loginUser(user,(err,result)=>{
        if(err){
            console.log('Error happened on the user login at the controller',err)
            return res.status(404).json({
                message : 'Sorry user is not existed please register again'
            })
        }
        
        const token = Jwt.sign({
            id : result.id,
            role : result.role
        },
         process.env.SECREAT_KEY)

         res.status(200).send({
            message : 'user loggedin successfully!!!',
            result: result,
            token: token
        })
        
    })
}

const GetProfile = (req,res) =>{
    const {id} = req.params

    userservice.getprofile(id,(err,result)=>{
        if(err){
            console.log('error happend during getting user profile',err)
            return err
        }
        return res.status(200).send({
            message : 'user profile succesffuly sent to the client',
            result: result
        })
    })
}

const UpdateProfile = (req,res) =>{
    const {id} = req.params
    const user = req.body

    userservice.updateProfile(user,id,(err,result)=>{
        if(err){
            console.log('Error happened during updating the profile')
            return res.status(404).send({
                message : 'Error happened during user updating!!!'
            })
        }
        console.log('User profile successfully ipdated!!!')
        return res.status(200).json({
            message : 'User profile successfullt updated',
            result: result
        })
    })
}



const GetAllUser = (req,res)=>{
    userservice.getAllUsers((err,result)=>{
        if(err){
            console.log('Error happend during getting all the users')
            return res.status(404).send({
                message : "Error happend during getting all the users"
            })
        }
        return res.status(200).json({
            message : 'All user data succesfully sent to the admin',
            result: result
        })
    })
}

const DeleteUser = (req,res) =>{
    const {id} = req.params
    userservice.deleteUser(id,(err,result)=>{
        if(err){
            console.log('Error happened during deleting user profile')
            return res.status(404).json({
                message : "Error happened during deleting user profile"
            })
        }
        console.log('User successfully deleted!!!');
        return res.status(200).json({
            message : 'User successfully Deleted',
            result: result
        })
    })
}

module.exports ={
    ResiterUser,
    LoginUser,
    GetProfile,
    UpdateProfile,
    GetAllUser,
    DeleteUser
}