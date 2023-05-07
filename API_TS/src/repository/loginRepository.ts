import { conection } from "./connection/connection";
import { ILogin } from "../interfaces/interfaces";

const TAG = './loginREPOSITORY '


export class loginRepository{
    public async loginConnection(textQuery:string, username_email:string){
        try{
            const conected = new conection();
            const query ={
                text: textQuery,
                values: [username_email]
            }
            const response:ILogin = await conected.execulteQuery(query)
            return response;
        }catch(e){
            console.log(TAG, e)
        }
    }
}