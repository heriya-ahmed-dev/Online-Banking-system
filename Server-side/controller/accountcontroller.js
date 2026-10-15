const accountService = require('../service_layer/accountservice');

const createAccount = (req,res) =>{
    const account = req.body;
     const user_id = req.user.id
    accountService.CreateAccount(account,user_id,(err,result)=>{
        if(err){
            console.log('Error happend on the controller during account creating');
            return res.status(401).send({
                message:"Error happened on the controller during the account creating!!!",
                error : err
            })
        }
        return(result)
    })
}

const GetAllAccount = (req,res) =>{

    accountService.GetAllAccount((err,result)=>{
        if(err){
            console.log('Error happened on the account controller during getting all account');
            return err
        }
        return res.status(201).json({
            message : "All account data is successfully sent",
            result : result
        })
    })
}


const GetAccountById = (req,res) =>{
    const {id} = req.params

    accountService.GetAccountById(id,(err,result)=>{
        if(err){
            return res.status(401).jjson({
                message : "Error happened",
                error : err
            })
        }
        res.status(201).send({
            message : "congratulations data is scussesfully snet to the client",
            result : result

        })
    })
}

const GetAccountByEmail = (req,res) =>{
    const {email} = req.params

    accountService.GetAccountByEmail(email,(err,result)=>{
        if(err){
            console.log('Error happend on the controller during sending account by email')
            return res.status(401).json({
                message : "Error happend on the controller during sending account by email",
                error :err
            })
        }
        return res.status(201).json({
            message : "Data successfully sent",
            result: result
        })
    })
}

const UpdateAccount = (req,res) =>{
    const {id} = req.params
    const account = req.body
    const user_id = req.user.id
    accountService.UpdateAccount(account,user_id,id,(err,result)=>{
        if(err){
           console.log(err)
           return res.status(401).send(err)
        }
        return res.status(200).send({
            message:"data succesfully updated",
            result : result
        })
    })
}

const DeleteAccount = (req,res) =>{
    const {id} = req.params;

    accountService.DeleteAccount(id,(err,result)=>{
        if(err){
            return res.status(401).json({
                error :err
            })
        }
        return res.status(200).json({
            message : "data successfully deleted",
            result : result
        })
    })
}
module.exports = {
    createAccount,
    GetAllAccount,
    GetAccountByEmail,
    GetAccountById,
    UpdateAccount,
    DeleteAccount
}



