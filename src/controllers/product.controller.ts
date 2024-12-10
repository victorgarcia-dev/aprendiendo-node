import { Request, Response} from 'express';
import Product from '../models/Product.model';


export const createProduct = async( req : Request, res : Response) => {

   try {
    const product = new Product(req.body); //le mando mis datos al modelo
    const saveProduct = await product.save(); //lo guarda en la BD

    res.status(201).json({data: saveProduct})
    
   } catch (error) {
    console.log(error);
   }

}