import { Model, DataTypes, Sequelize } from "sequelize";

export default class User extends Model<UserRow>{

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static register(sequelize: Sequelize) {
      User.init({
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true

            },
            password: {
                type: DataTypes.STRING,
                allowNull: false        
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: true
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize: sequelize,
            timestamps: true,
            createdAt: false,
            updatedAt: false,
            tableName : "User"
        });
       
    }


}


export interface UserRow {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    type: string;
}