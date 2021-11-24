import { Console } from 'console';
import {Request, Response, NextFunction, RequestHandler} from 'express';

let authentication:RequestHandler;

authentication=(req:Request, res:Response, next:NextFunction)=>{
    console.log("autentifikacija");
    next();
}

export default authentication;