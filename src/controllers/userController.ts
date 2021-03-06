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

userRouter.put("/:id", async(req:Request, res:Response)=> {

    let poruka="";
    try
    {
        const id=req.params.id; //where
        const pass=req.body.password; //set

        await User.update(
            { password: pass},
            { where: {
                id: id
            }});

        poruka="password updated!"
    }catch(error:any)
    {
        console.error(error.message);
        poruka=error.message;
    }

    res.send(poruka);
});


userRouter.delete('/:usname', async(req:Request, res:Response)=>{

    let poruka="";

    try
    {
        const usname=req.params.usname;

        await User.destroy({where: {username:usname}});
        poruka="user "+"'"+usname+"'"+ "successfully deleted!";

    }catch(err:any)
    {
        poruka=err.message;
    }

    res.send(poruka);
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
    let poruka="";
    const  user = req.body;
    console.log("user ", user)
    try
    {
        await User.create({ id: 3,
            username: "Johnny",
            password: "123546",
            firstname: "ZEKS",
            lastname: "John",
            email: "haha",
            type: "Admin"});

            poruka="all good";
    }catch(err:any)
    {
        console.error(err.message);
        poruka=err.message;
    }

    res.send(poruka);
});




export default userRouter;