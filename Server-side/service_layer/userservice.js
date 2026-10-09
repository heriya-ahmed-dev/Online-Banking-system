const bcrypt = require('bcrypt');

const userModel = require('../model/usermodel')

const registerUser = (user,callback) =>{
    
    userModel.getUserbyEmail(user.email,(err,result)=>{
        if(err){
            console.log('Error happened when during user registration',err)
            return callback(err)
        }
        if(result > 0){
            console.log('User already registered can not e registered again!!!')
            
        }

        bcrypt.hash(user.password,10,(err,hashPassword)=>{
            if(err){
                console.log('Error happened on the Password hashing',err)
            }
             const newUser = {
            name : user.name,
            email : user.email,
            password : hashPassword,
            phone : user.phone,
            address : user.address,
            role : 'customer',
            status : 'active'
        }
   
        userModel.createUser(newUser,(err,result)=>{
            if(err){
                console.log('Error happened during new user registration',err)
                return callback(err)
            }
            console.log(result)
            return callback(result)
        })
        })
       
    })

}

const loginUser  = (user,callback) =>{
     userModel.getUserbyEmail(user.email,(err,result)=>{
        if(err){
            console.log('Error happened during user login',err)
            return callback(err)
        }
        if(result.length === 0){
            console.log('Sorry the user is not existed please newly register')
        }
     })
}

const getprofile  = (id,callabck) =>{
     userModel.getUserById(id,(err,result)=>{
        if(err){
            console.log('Error happened during getiing customers profile',err)
            return callabck(err)
        }
        if(result.length ===0){
           console.log('Sorry the user is not exitsted')
        }
        return callback(null,result)
     })
}

const updateProfile = (user,id,callback) =>{

    userModel.updateUser(user,id,(err,result)=>{
        if(err){
            console.log('Error happened on the profile update',err)
        }
        return callback(null,result)
    })
}

const getAllUsers = (callback) =>{
  
    userModel.getAllUser((err,result)=>{
        if(err){
            console.log('Error happened during profile updating',err)
            return callback(err)
        }
        console.log('result: ',result)
        return callback(result)
    })
}

const getUserById = (id,callback) =>{
    userModel.getUserById(id,(err,result)=>{
        if(err){
            console.log('Error happened during getting user by id',err)
            return callback(err)
        }
        console.log('result: ',result)
        return callback(result)
    })
}

const deleteUser = (id,callback) =>{
    userModel.deleteUser(id,(err,result)=>{
       if(err){
        console.log('Error happened during profile deleting: ',err)
        return callback(err)
       }
       console.log(result)
       return callback(result)
    })
}


module.exports ={
    registerUser,
    loginUser,
    getprofile,
    updateProfile,
    getAllUsers,
    getUserById,
    deleteUser
}