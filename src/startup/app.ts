import * as express from "express";
import * as bodyParser from "body-parser";
import routing from "./routing";


const app = express();

app.use(bodyParser.json()); //za sta koristim?
app.use(bodyParser.urlencoded({extended:false}));


app.set("port", process.env.PORT || 5000);
app.use(routing);

export default app;