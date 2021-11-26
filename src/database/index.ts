import { Sequelize } from "sequelize";
import User from "./user-table";


const port =5432;

const sequelize = new Sequelize('db', 'usname', 'pass', {
    host: 'localhost',
    dialect: 'postgres'
  });
User.register(sequelize);

const test = async() => {
    try{
       await sequelize.authenticate();
        console.log("Connection established successfully!");
    }catch(error){
        console.log("Unable to connect with database: ", error);
    
    }
}

export default test;
export {
    User

};