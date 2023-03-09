const repository_user  = require('../repository/user')

exports.service_get_user = async (id) =>{
    try{
        const _id = parseInt(id)
        const user = await repository_user.repository_get_user(_id)
        return user;
    }catch(error){
        return error;
    }
}