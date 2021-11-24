import { HttpStatusCode } from "./constants";

export class Exception extends Error{

    constructor(public message:string, public status:number=HttpStatusCode.InternalServerError, public errors?:any[])
    {
        super(message);
    }
}

export class BadRequestException extends Exception{
    constructor(message?: string, errors?:any[]){
        super(message || "Bad Request", HttpStatusCode.BadRequest);
    }
}