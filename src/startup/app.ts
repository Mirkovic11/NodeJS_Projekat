import * as express from "express";
import * as bodyParser from "body-parser";
import routing from "./routing";
import Controller from "../interfaces/contoller";
import  authentication  from "../middleware/auth-middleware";
import userRouter from '../controllers/userController';

const app = express();

app.use(logger); //prvo se pozove ovaj middleware, nakon toga ostali definisani u index-router.ts

function logger(req:express.Request, res:express.Response, next:express.NextFunction) { //pozvace se prije svekog zahtjeva ('/', '/users') koje sam definisala u index-routers.ts
    
    next();
    console.log("log\n"); 
}

app.use(bodyParser.json()); //za sta koristim?
app.use(bodyParser.urlencoded({extended:false}));

app.set("port", process.env.PORT || 5000);

app.use(routing);
app.use('/home', authentication, userRouter);

export default app;
