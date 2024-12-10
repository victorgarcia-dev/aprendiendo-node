import { Router } from "express";
import { body } from  'express-validator'
import { createProduct } from "../controllers/product.controller";
import { handleInputErrors } from "../middlewares";

export const productRouter = Router();

productRouter.get('/', (req,res) => {
    res.send('hola desde get');
})

productRouter.post('/', 
     //validación
      body('name').notEmpty().withMessage('El Nombre del producto es requerido'),
      body('price').isNumeric().withMessage('El valor del producto tiene que ser numerico')
                   .notEmpty().withMessage('El Valor del producto es requerido')
                   .custom( value => value > 0).withMessage('El valor tiene que ser mayor a cero'),
      handleInputErrors,
      createProduct
)

productRouter.delete('/', (req,res) => {
    res.send('hola desde delete');
})
productRouter.patch('/', (req,res) => {
    res.send('hola desde patch');
})

productRouter.put('/', (req,res) => {
    res.send('hola desde put');
})