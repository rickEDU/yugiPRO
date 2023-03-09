const service_user = require('../service/user')


exports.get_user = async (req, res) =>{
    const id =  req.params.id
    const response = {
        menssage:"",
        code: null,
        data: null,
        error: null
    }

    try{
        const user =  await service_user.service_get_user(id)
        if(user.length<1){
            throw 'User not found'
        }
        response.menssage = 'Sucess'
        response.code = 200
        response.data = user
        res.status(200).json(response)
    }catch(error){
        response.menssage = 'Internal error'
        response.code = 404
        response.error = error
        res.status(404).json(response)
    }


}



