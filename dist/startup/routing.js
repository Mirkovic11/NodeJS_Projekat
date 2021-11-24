"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_router_1 = require("../routers/index-router");
const routing = (0, express_1.Router)();
routing.use('/', index_router_1.default);
routing.use('/users', index_router_1.default);
exports.default = routing;
//# sourceMappingURL=routing.js.map