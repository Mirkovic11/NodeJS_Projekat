"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./startup/app");
function loggerMiddleware(request, response, next) {
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
const server = http.createServer(app_1.default);
server.listen(app_1.default.get("port"), () => {
    const address = server.address();
    const bind = address.port ? `port ${address.port}` : `pipe ${address}`;
    console.log(`Listening on ${bind}`);
});
//# sourceMappingURL=server.js.map