import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.post("/",productController.productPostController);
router.get("/",productController.findAllProduct);
router.get("/:productId",productController.findAProductUsingId)
router.put("/:updateId")



export const productRouter=router;