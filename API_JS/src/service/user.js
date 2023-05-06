const repository_user  = require('../repository/user')
const bcrypt = require('bcrypt')

const TAG = '/SERVICE:'

exports.service_get_user = async (id) =>{
    try{
        const _id = parseInt(id)
        const user = await repository_user.repository_get_user(_id)
        return user;
    }catch(error){
        console.log(TAG, 'service post : ', error)
        return error;
    }
}

exports.service_post_user = async (username, email, password)=>{
    try{
        const hash_password = await bcrypt.hash(password,10)
        const compare  = await bcrypt.compare(password, hash_password)
        if(!compare){
            return;
        }
        const user = await repository_user.repository_post_user(username, email, hash_password)
        return user;
    }catch(error){
        console.log(TAG, 'service post : ', error)
        return error;
    }
}

exports.service_patch_user = async (_id, body)=>{
    try{
        if(body.password!== undefined){
            const hash_password = await bcrypt.hash(body.password, 10)
            const compare  = await bcrypt.compare(body.password, hash_password)
            if(!compare){
                return;
            }
            body.password = hash_password
        }
        const id =  parseInt(_id)
        const user = await repository_user.repository_patch_user(id, body)
        return user;
    }catch(error){
        console.log(TAG, 'service post : ', error)
        return error;
    }
}
exports.service_delete_user = async (_id)=>{
    try{

        const id =  parseInt(_id)
        const user = await repository_user.repository_delete_user(id)
        return user;
    }catch(error){
        console.log(TAG, 'service post : ', error)
        return error;
    }
}