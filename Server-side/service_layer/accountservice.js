const crypto = require('crypto')

const accountModel = require('../model/accountmodel')

const CreateAccount = (user_id,Account,callback) =>{
     const accountNum = crypto.randomInt(1000000,9999999);
            const newAccount = {
                  user_id : user_id,
                  account_number: accountNum,
                  account_type : Account.account_type,
                  balance : Account.balance,
                  status : 'Active',
                  created_at : Account.created_at
            }

    accountModel.createAccount(newAccount,(err,result)=>{
        if(err){
            console.log('Error happened on the service modle during the account creation',err)     
            return callback(err)
        }
        console.log(result)
        return callback(null ,result)
    })
}

const GetAllAccount = (account,callback) =>{
    accountModel.getAllacount(account,(err,result)=>{
        if(err){
            console.log('Error happened on the getting all account at the Server layer');
            return callback('Error happened during getting all account',err)
        }
        return callback(null,result)
    })

}

const GetAccountById = (id,callback) =>{
    accountModel.getaccountById(id,(err,result)=>{
         if(err){
            console.log('Error happened on the service layer during getting account by id : ',err)
            return callback(null,err)
        }
        console.log('result from the service layer :',result)
        return callback(null,result)
    })

}

const GetAccountByEmail = (email,callback)=>{
    accountModel.getaccountByEmail(email,(err,result)=>{
       if(err){
        console.log('Error happened during getting account by email : ',err)
        return callback(err)
    }
    return callback(null,result)
    })
   
}

const UpdateAccount = (id,account,callback)=>{
    accountModel.updateAccount(id,account,(err,result)=>{
        if(err){
            return callback(err)
        }
        return callback(null,result)
    })
}

const DeleteAccount = (id,callback)=>{
    accountModel.deletaccount(id,(err,result)=>{
        if(err){
            return callback(err)
        }
        return callback(result)
    })
}





module.exports = {
    CreateAccount,
    GetAllAccount,
    GetAccountById,
    GetAccountByEmail,
    UpdateAccount,
    DeleteAccount

}