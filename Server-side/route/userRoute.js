const usercontroller = require('../controller/usercontroller');
const authmiddleware = require('../middle_ware/authmiddleware')
const express = require('express');
const router = express.Router()

router.post('/register',usercontroller.ResiterUser)
router.post('/login',usercontroller.LoginUser)
router.get('/profile',authmiddleware,usercontroller.GetProfile)

module.exports = router