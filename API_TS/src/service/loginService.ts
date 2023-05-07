import { ILogin, IError, ILogin_Response } from "../interfaces/interfaces";
import { loginRepository } from "../repository/loginRepository";
import { login_Email, login_Username } from "../repository/querys/loginQuery";

const TAG = '/loginSERVICE '

class loginSERVICE{
    public async login(username_email:string, password:string){
        try{
            const repository = new loginRepository();
            const regexEmail:RegExp = /^\D[a-zA-Z0-9._-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
            const regexName:RegExp = /^\D[a-zA-Z0-9._-]+$/;;
            let response:ILogin|undefined;

            if(regexEmail.test(username_email)){
                response = await repository.loginConnection(login_Email, username_email)
            }else if(regexName.test(username_email)){
                response = await repository.loginConnection(login_Username, username_email)
            }else{
                const errorResponse: IError = {code: 403, message:'error Username ou Email inválidos.'};
                return errorResponse;
            }
            if(!response){
                const errorResponse: IError = {code: 404, message:'error User not found.'};
                return  errorResponse;
            }
            // validar a senha;

            const responseAPI: ILogin_Response ={
                id: response.id,
                username: response.username,
                email: response.email,
                is_admin: response.is_admin
            }

            return responseAPI;
        }catch(e){
            throw e;
        };
    };
};

export { loginSERVICE };