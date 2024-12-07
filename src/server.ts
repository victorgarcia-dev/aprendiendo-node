import express from 'express';
import { productRouter } from './product';

export const server = express();

server.use('/', productRouter);




