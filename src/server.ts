import express from 'express';
import { productRouter } from './routers/product';
import { db } from './config/db';
import colors from 'colors';


const connectDB = async () => {
    try {
        await  db.authenticate(); //espero a conectar a la DB
        db.sync(); //actualiza la base de datos
        console.log(colors.bold.blue('Conexión exitosa a la DB'));
        
    } catch (error) {
        console.log(error);
        console.log(colors.bold.red('Hubo un error al conectar a la base de datos'));
    }

}



//DB
connectDB();


//instancia de express
export const server = express();

//leer datos datos tipo json en node
server.use(express.json());

server.use('/api/products', productRouter);




