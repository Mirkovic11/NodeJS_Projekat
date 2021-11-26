import * as express from "express";
import * as bodyParser from "body-parser";
import Controller from "../interfaces/contoller";
import  authentication  from "../middleware/auth-middleware";
import userRouter from '../controllers/userController';
import test from "../database";

const app = express();

app.use(logger); 

function logger(req:express.Request, res:express.Response, next:express.NextFunction) { 
    
    next();
    console.log("log\n"); 
}

app.use(bodyParser.json()); //za sta koristim?
app.use(bodyParser.urlencoded({extended:false}));

app.set("port", process.env.PORT || 5000);

//app.use(test);
app.use('/home', authentication, userRouter);



export default app;
