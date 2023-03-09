const express = require('express')
const router  = express.Router()
const user_controler = require('../controller/user')


router.get('/user/:id', user_controler.get_user)


module.exports = router;