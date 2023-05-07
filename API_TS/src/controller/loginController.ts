import { Request, Response } from "express";
import { IApiResponse } from "../interfaces/interfaces";
import { loginSERVICE } from "../service/loginService";
import { ILogin } from "../interfaces/interfaces";
import jwt from "jsonwebtoken";

const TAG = '/loginCONTROLLER '

class Session{

    public async login(req: Request, res: Response) {
        const response: IApiResponse={
            message: 'Error',
            code: 500,
            data: null,
            error: []
        }
        try{
            const loginService = new loginSERVICE();
            const { username_email, password } = req.body;
            //verificar se é email ou username
            //validar email/username e password
            const DB_reponse = await loginService.login(username_email, password);
            if(DB_reponse.code!=undefined){
                response.code = DB_reponse.code
                response.error.push(DB_reponse.message!);
                throw 'Error in login';
            }
            response.message = "Success";
            response.code = 200;
            response.data = DB_reponse;

            const jwt_cookie = jwt.sign({ user: response.data }, process.env.JWTSECRET!);
            res.cookie("session", jwt_cookie, {maxAge:345600000});
            res.status(response.code).json(response);
        }catch(e){
            console.log(TAG, e);
            res.status(400).json(response);
        }
    }
};

export { Session };