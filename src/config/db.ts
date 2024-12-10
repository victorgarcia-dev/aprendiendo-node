import { Sequelize  } from 'sequelize-typescript';
import dotenv from 'dotenv';


//variables de entorno
dotenv.config();


export const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*.ts']
});