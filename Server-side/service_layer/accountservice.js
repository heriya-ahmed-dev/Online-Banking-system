const crypto = require('crypto')

const accountModel = require('../model/accountmodel')

const createAccount = (Account,callback) =>{
    
     const accountNum = crypto.randomInt(1000000000,9999999999);
            const newAccount = {
                  user_id : Account.user_id,
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
        return callback(result)
    })
}

module.exports = {
    createAccount
}