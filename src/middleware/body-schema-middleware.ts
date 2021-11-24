import {Request, Response, NextFunction} from 'express';
import { BadRequestException } from '../common/exceptions';

const Ajv = require("ajv");
const ajv = new Ajv();

function getValidationErrors(data: any, schema: any) {

    const isDataValid = ajv.compile(schema);
    const validated = isDataValid(data);

    if (validated)
        return;

    const errors = isDataValid.errors.map((err: any) => ({
        message: err.message
    }));

    return errors;
}

export const requireBody = (schema: any) => async (request: Request, response: Response, next: NextFunction) => {

    const { body } = request;

    const errors = getValidationErrors(body, schema);

    if (errors){
        response.send(new BadRequestException());
        return;
    }
    else{
        next();
    }


}