const express = require('express');
const authmiddleware = require('../middle_ware/authmiddleware')
const adminmiddleware = require('../middle_ware/adminmiddleware')
const router = express.Router()
const accountcontroller = require('../controller/accountcontroller');

router.post('/account',authmiddleware,accountcontroller.createAccount);
router.get('/getall',adminmiddleware,accountcontroller.GetAllAccount);
router.get('/get/:id',accountcontroller.GetAccountById);
router.get('/get/:email',accountcontroller.GetAccountByEmail)
router.post('update/:id',adminmiddleware,accountcontroller.UpdateAccount);
router.post('delete/:id',adminmiddleware,accountcontroller.DeleteAccount)


module.exports = router

