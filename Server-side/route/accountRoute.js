const express = require('express');
const authmiddleware = require('../middle_ware/authmiddleware')

const router = express.Router()
const accountcontroller = require('../controller/accountcontroller');

router.post('/account',authmiddleware,accountcontroller.createAccount)