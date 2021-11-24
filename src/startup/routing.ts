import { Router } from "express";
import indexRouter from "../routers/index-router";

const routing=Router();

routing.use('/', indexRouter);
//routing.use('/users', indexRouter);


export default routing;