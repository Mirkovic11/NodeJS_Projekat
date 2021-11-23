import * as http from "http";
import { AddressInfo } from "net";
import { pipeline } from "stream";
import app from './startup/app';
import * as express from 'express';
import bodyParser = require("body-parser");
import { hostname } from "os";

function loggerMiddleware(request: express.Request, response:express.Response, next:express.NextFunction){
    console.log(request.method, request.url, request.body);
    next();
}

/*const server = express();

//server.use(loggerMiddleware);

server.use(bodyParser.json());
server.get('/', (req,res) => {
    res.send({//req.body,
        hostname: req.hostname,
        method: req.method,
    });
});

server.listen(5000, ()=> console.log("Server is running..."));*/

const server = http.createServer(app);
server.listen(app.get("port"), () => {
    const address = <AddressInfo>server.address();
    const bind = address.port ? `port ${address.port}` : `pipe ${address}`;
    console.log(`Listening on ${bind}`);
});