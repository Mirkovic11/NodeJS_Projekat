import { UserType } from "../interfaces/userType";

export class User{

    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    type : UserType

    constructor(id:number, usname:string, pass:string, fname:string, lname:string, email:string, type: UserType){
        this.id=id;
        this.username=usname;
        this.password=pass;
        this.firstName=fname;
        this.lastName=lname;
        this.email=email;
        this.type=type;
    }

}