"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexRouter = (0, express_1.Router)();
indexRouter.route("/").get((request, response, next) => {
    response.send("I am working!");
});
indexRouter.route("/users").get((req, res, next) => {
    res.send("Nova stranica");
});
exports.default = indexRouter;
//# sourceMappingURL=index-router.js.map