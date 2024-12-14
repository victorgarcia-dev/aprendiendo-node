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

export const getProducts = async( req : Request, res : Response) => {

   try {
    const products = await Product.findAll()
    res.status(200).json({data:products})
    
   } catch (error) {
    console.log(error);
   }

}

export const getProductId = async( req : Request, res : Response) => {
   const {id} = req.params;
   try {
    const product = await Product.findByPk(id)

    //en caso de que no encuentre ningun producto
    if(!product){
      res.status(404).json({error: "Producto no encontrado"});
      return;
    }

    // respuesta si encuentra el producto
    res.status(200).json({data:product})
    
   } catch (error) {
    console.log(error);
   }

}

export const updateProductById= async( req : Request, res : Response) => {
      const newProduct = req.body;
      const {id} = req.params;
      try {
      const product = await Product.findByPk(id)

      //en caso de que no encuentre ningun producto
      if(!product){
         res.status(404).json({error: "Producto no encontrado"});
         return;
      }

      //actualizo
      const updateProduct = await product.update(newProduct);
       await updateProduct.save()
      
      // respuesta si encuentra el producto
      res.status(200).json({data:updateProduct})
      
      } catch (error) {
      console.log(error);
      }

}

export const deleteProductById= async( req : Request, res : Response) => {
   
   const {id} = req.params;
   try {
   const product = await Product.findByPk(id)

   //en caso de que no encuentre ningun producto
   if(!product){
      res.status(404).json({error: "Producto no encontrado"});
      return;
   }

   //eliminar
   await product.destroy();
   res.status(200).json({data:'Producto eliminado'})
   
   
   } catch (error) {
   console.log(error);
   }

}