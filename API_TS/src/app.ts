import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './route/router';
import { urlencoded } from 'body-parser';

export class App{
    
    public server: express.Application;

    constructor(){
        this.server = express();
        this.middleware();
    }

    private middleware(){
        this.server.use(cors({origin:true, credentials:true}));
        this.server.use(express.json());
        this.server.use(cookieParser());
        this.server.use(urlencoded({extended:true}));
        this.server.use(router);
    }
}