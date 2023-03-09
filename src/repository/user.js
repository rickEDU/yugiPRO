
const conection = require('./conection')

exports.repository_get_user = async (id) =>{
    try{
        const query =  [
            {text: "select * from users where id = $1",
            params:[id]} ]
        const result = await conection.executarQuerys(query)
        return result[0].rows
    }catch(error){
        return error
    }

}