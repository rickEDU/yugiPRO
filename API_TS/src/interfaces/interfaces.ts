import { query } from "express";

export interface IRespose{

}

export interface IApiResponse{
    message: string;
    code: number;
    data: IRespose | null;
    error: string[];
}

export interface IConection{
    text:string;
    values: Array<string | number>;
}

export interface ILogin{
    id:string|number;
    username:string;
    email: string;
    password: string;
    is_admin:boolean;
    code?:number;
    message?:string;
}
export interface ILogin_Response{
    id:string|number;
    username:string;
    email: string;
    is_admin:boolean;
    code?:number;
    message?:string;
}

export type IError = {
    code: number;
    message:string;
}