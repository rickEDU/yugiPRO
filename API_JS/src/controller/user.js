const service_user = require('../service/user')

const TAG = '/CONTROLER:'

exports.get_user = async (req, res) =>{
    
    const response = {
        menssage:"",
        code: null,
        data: null,
        error: null
    }

    try{
        const user =  await service_user.service_get_user(req.params.id)
        if(user.length<1){
            throw 'User not found'
        }
        response.menssage = 'Sucess'
        response.code = 200
        response.data = user
        res.status(200).json(response)
    }catch(error){
        console.log(TAG, 'post', error)
        response.menssage = 'Internal error'
        response.code = 404
        response.error = error
        res.status(404).json(response)
    }
}

exports.post_user = async (req, res) =>{
    const response = {
        menssage:"",
        code: null,
        data: null,
        error: null
    }
    try{

        const {username, email, password} = req.body
        if(!username){
            throw 'Please enter a username'
        }
        if(!email){
            throw 'Please enter a email'
        }
        if(!password){
            throw 'Please enter a password'
        }
        if(password.length<8){
            throw 'Password must be at least 8 characters long'
        }
        const user =  await service_user.service_post_user(username, email, password)
        if(user.length<1){
            throw 'User not found'
        }
        response.menssage = 'Sucess'
        response.code = 200
        response.data = user
        res.status(200).json(response)
    }catch(error){
        console.log(TAG, 'post', error)
        response.menssage = 'Internal error'
        response.code = 404
        response.error = error
        res.status(404).json(response)
    }
}

exports.patch_user = async (req, res) =>{
    const response = {
        menssage:"",
        code: null,
        data: null,
        error: null
    }
    try{
        const body  = {}

        if(req.body.username !== undefined){
            body.username = req.body.username
        }
        if(req.body.email !== undefined){
            body.email = req.body.email
        }
        if(req.body.password !== undefined){
            body.password = req.body.password
        }
        const user =  await service_user.service_patch_user(req.params.id, body)
        if(user.length<1){
            throw 'User not found'
        }
        response.menssage = 'Sucess'
        response.code = 200
        response.data = user
        res.status(200).json(response)
    }catch(error){
        console.log(TAG, 'post', error)
        response.menssage = 'Internal error'
        response.code = 404
        response.error = error
        res.status(404).json(response)
    }
}

exports.delete_user = async (req, res) =>{
    const response = {
        menssage:"",
        code: null,
        data: null,
        error: null
    }
    try{

        const user =  await service_user.service_delete_user(req.params.id)
        if(user.length<1){
            throw 'User not found'
        }
        response.menssage = 'Sucess'
        response.code = 200
        response.data = user
        res.status(200).json(response)
    }catch(error){
        console.log(TAG, 'post', error)
        response.menssage = 'Internal error'
        response.code = 404
        response.error = error
        res.status(404).json(response)
    }
}



