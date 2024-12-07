import { Router } from "express";

export const productRouter = Router();

productRouter.get('/', (req,res) => {
    res.send('hola desde get');
})

productRouter.post('/', (req,res) => {
    res.send('hola desde post');
})

productRouter.delete('/', (req,res) => {
    res.send('hola desde delete');
})
productRouter.patch('/', (req,res) => {
    res.send('hola desde patch');
})

productRouter.put('/', (req,res) => {
    res.send('hola desde put');
})