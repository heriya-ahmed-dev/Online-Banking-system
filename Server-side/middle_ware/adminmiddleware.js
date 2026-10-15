const adminMiddleWare = (req,res,next) =>{
    if(!req.user || req.user.role !== 'Admin' ){
        return res.status(401).send({
            message : "Access denired!!! . Admin only"
        })
        
    }
    next()
}

module.exports = adminMiddleWare;