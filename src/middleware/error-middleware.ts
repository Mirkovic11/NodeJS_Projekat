import { Request, Response, NextFunction, RequestHandler } from "express";


export function asyncErrorHandler(callback: RequestHandler) {
    return function (request: Request, response: Response, next: NextFunction) {
        return Promise.resolve(callback(request, response, next)).catch(next);
    }
}
