const express = require('express')
const router  = express.Router()
const user_controler = require('../controller/user')


router.get('/user/:id', user_controler.get_user)
router.post('/user', user_controler.post_user)
router.patch('/user/:id', user_controler.patch_user)
router.delete('/user/:id', user_controler.delete_user)


module.exports = router;