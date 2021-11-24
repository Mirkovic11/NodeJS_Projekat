"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routing_1 = require("./routing");
const app = express();
app.use(bodyParser.json()); //za sta koristim?
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 5000);
app.use(routing_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map