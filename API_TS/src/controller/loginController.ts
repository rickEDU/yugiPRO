import { Request, Response } from "express";
import { IApiResponse } from "../interfaces/interfaces";
import { loginSERVICE } from "../service/loginService";

const TAG = '/loginCONTROLLER '

class Session{

    protected loginService = new loginSERVICE();

    protected response: IApiResponse ={
        message: '',
        code: 500,
        data: null,
        error: []
    };

    public async login(req: Request, res: Response) {
        try{
            const { username_email, password } = req.body;
            //verificar se é email ou username
            //validar email/username e password
            const DB_reponse = await this.loginService.login(username_email, password);

            res.status(this.response.code).json(this.response);
        }catch(e){
            console.log(TAG, e);
            res.status(400).json(this.response);
        }
    }
};

export { Session };