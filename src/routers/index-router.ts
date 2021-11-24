import {Request, Response, NextFunction, Router, response} from 'express';
import { request } from 'http';
import * as bodyParser from "body-parser";

const indexRouter=Router();


indexRouter.route("/").get(
    (request:Request, response:Response, next: NextFunction) => {
        response.send({
            hostname: request.hostname,
            path: request.path,
            metoda: request.method
        });
        console.log("Home page");
        
    }
);


export default indexRouter;