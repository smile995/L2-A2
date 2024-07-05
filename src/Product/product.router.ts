import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.post("/",productController.productPostController)




export const productRouter=router;