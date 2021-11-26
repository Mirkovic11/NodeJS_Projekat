import {Router, Request, Response, NextFunction, response} from 'express';
//import { User } from '../models/user';
import { UserType } from '../interfaces/userType';
import Controller from '../interfaces/contoller';
import { requireBody } from '../middleware/body-schema-middleware';
import { asyncErrorHandler } from '../middleware/error-middleware';
import { User } from '../database';
const userRouter=Router();
userRouter.get('/:usname', async(req:Request, res:Response, next:NextFunction)=> {

        let user=null;
        const usname = req.params.usname;
        console.log(usname);
        try{
             user=await User.findAll( { where: {username: usname}});
        }catch(err:any){
            console.error(err.message);
            
        }

        var body=["Data of the user with username "+"'"+usname+"'", user];
        res.send(body);
      


});

userRouter.get('/',async(req:Request, res:Response, next:NextFunction)=> {
    let user=null;
   try
   {
    user=await User.findAll();   
   }catch(err : any)
   {
    console.error(err.message);
   }
    
   var body=["List of all users", user];
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

userRouter.post('/', requireBody(schema),async(req:Request, res:Response, next:NextFunction)=> {
       const newUser = await User.create({
        
        id: 2,
        username: "Johnny",
        password: "123546",
        firstname: "ZEKS",
        lastname: "John",
        email: "haha",
        type: "Admin"
      });
    const user:User=req.body;


    res.send("Successfully added");
});




export default userRouter;