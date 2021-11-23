import {Request, Response, NextFunction, Router, response} from 'express';
import { request } from 'http';


const indexRouter=Router();

indexRouter.route("/").get(
    (request:Request, response:Response, next: NextFunction) => {
        response.send("I am working!");
    }
);

export default indexRouter;