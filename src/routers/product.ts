import { Router } from "express";
import { body, param } from  'express-validator';
import { createProduct, deleteProductById, getProductId, getProducts, updateProductById } from "../controllers/product.controller";
import { handleInputErrors } from "../middlewares";

export const productRouter = Router();

productRouter.get('/', getProducts);

productRouter.get('/:id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    getProductId)

productRouter.post('/', 
     //validación
      body('name').notEmpty().withMessage('El Nombre del producto es requerido'),
      body('price').isNumeric().withMessage('El valor del producto tiene que ser numerico')
                   .notEmpty().withMessage('El Valor del producto es requerido')
                   .custom( value => value > 0).withMessage('El valor tiene que ser mayor a cero'),
      handleInputErrors,
      createProduct
)

productRouter.delete('/id', 
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors,
    deleteProductById)


productRouter.put('/:id',
    body('name').notEmpty().withMessage('El Nombre del producto es requerido'),
    body('price').isNumeric().withMessage('El valor del producto tiene que ser numerico')
                 .notEmpty().withMessage('El Valor del producto es requerido')
                 .custom( value => value > 0).withMessage('El valor tiene que ser mayor a cero'),
    param('id').isInt().withMessage('ID no valido'),
    handleInputErrors
    ,updateProductById)

