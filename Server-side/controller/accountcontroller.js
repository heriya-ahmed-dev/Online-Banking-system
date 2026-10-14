const accountService = require('../service_layer/accountservice');

const createAccount = (req,res) =>{
    const account = req.body

    accountService.createAccount(account,(err,result)=>{
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

module.exports = {
    createAccount
}