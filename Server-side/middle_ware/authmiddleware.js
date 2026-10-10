const jwt = require('jsonwebtoken');
require('dotenv').config();

const authmiddleware = (req,res,next) =>{
    const authheader  = req.headers.authorization;

    if(!authheader || !authheader.startsWith('Bearer ')){
        return res.status(401).send({
            message : 'Authentication Token is required!!!'
        })
    }

    const token = authheader.split(' ')[1]

    try{
        const decode = jwt.verify(
            token,
            process.env.SECREAT_KEY
        )
        req.user = decode
        next()
    }
    catch(error){
       console.log('Error happened during the verification',error)
       return res.status(401).send(error)
    }
}

module.exports  = authmiddleware