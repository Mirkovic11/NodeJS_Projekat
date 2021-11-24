import {Router, Request, Response, NextFunction, response} from 'express';
import { User } from '../models/user';
import { UserType } from '../interfaces/userType';
import Controller from '../interfaces/contoller';
import { requireBody } from '../middleware/body-schema-middleware';
import { asyncErrorHandler } from '../middleware/error-middleware';

const userRouter=Router();
const lista=new Array<User>(new User(1,"zeksi","password", "Zeljana", "Mirkovic", "zm@gmail.com", UserType.Administrator));


function checking(list:Array<User>, data:string): User{
    let user=new User(-1,"","","","","",UserType.None);
    for(let item of list){
        if(item.username===data){
            user=item;
            console.log("nasaooooooooooooooooooooooooooooo ");
            break;
        }
    }
    return user;
    
}

userRouter.get('/:id', (req:Request, res:Response, next:NextFunction)=> {
    console.log("primjen get ime zahtjev");
        console.log(req.params.id);
        console.log(res.locals);
        const name:string= req.params.id;

        const us=checking(lista,name);

        if(us.id!=-1){
            res.send("Hello "+us.username);
        }else {
            res.send("Ne postoji takav korisnik");
        }
      


});

userRouter.get('/',(req:Request, res:Response, next:NextFunction)=> {
    console.log("primjen get zahtjev");
        var body=["ruta GET radi", lista];
        res.send(body);
   
});


const schema= {
    type: "object",
    properties: {
        id: {type: "number"},
        username: {type: "string"},
        password: {type: "string"},
        firstName: {type: "string"},
        lastName: {type: "string"},
        email: {type: "string"},
        type : {type: "string"}
    },
    required: ["id","username","password", "firstName", "lastName","email","type"]
}

userRouter.post('/', requireBody(schema),(req:Request, res:Response, next:NextFunction)=> {
    console.log("Primjen post zahtjev");
    const user:User=req.body;

    lista.push(user);
    var body=["Uspjesno primljeno", lista];
    res.send(body);
});




export default userRouter;