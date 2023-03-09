
const conection = require('./conection')

const TAG = '/REPOSITORY: '

exports.repository_get_user = async (id) =>{
    try{
        const query =  [
            {text: "select * from users where id = $1",
            params:[id]} ]
        const result = await conection.executarQuerys(query)
        return result[0].rows[0]
    }catch(error){
        console.log(TAG, 'repository get : ', error)
        return error
    }

}


exports.repository_post_user = async (username, email, password) =>{
    try{
        const query = [
            {text: "insert into users (username, email, password) values ($1, $2, $3) returning *",
            params: [username, email, password]}]
        const result = await conection.executarQuerys(query)
        return result[0].rows[0]
    }catch(error){
        console.log(TAG, 'repository post : ', error)
        throw error;
    }
}


exports.repository_patch_user = async (id, body) =>{
    try{
        const query = [
            {text: "select username, email, password from users where id=$1",
            params: [id]}]
        const result = await conection.executarQuerys(query)
        
        Object.assign(result[0].rows[0], body)
        const {username, email, password} = result[0].rows[0]

        const query2 = [
            {text: "update users set username=$2, email=$3, password=$4 where id=$1 returning *",
            params: [id, username, email, password]}]
        const result2 = await conection.executarQuerys(query2)
        return result2[0].rows[0];
    }catch(error){
        console.log(TAG, 'repository patch : ', error)
        throw error;
    }
}

exports.repository_delete_user = async (id) =>{
    try{
        const query = [
            {text: "delete from users where id=$1 returning *",
            params: [id]}]
        const result = await conection.executarQuerys(query)

        return result[0].rows[0];
    }catch(error){
        console.log(TAG, 'repository patch : ', error)
        throw error;
    }
}