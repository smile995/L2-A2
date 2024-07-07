import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.get("/search",productController.searchProductByName)
router.post("/",productController.productPostController);
router.get("/",productController.findAllProduct);
router.get("/:productId",productController.findAProductUsingId)
router.put("/:updateId",productController.updateAProduct)
router.delete("/:deleteId",productController.deleteProductById)



export const productRouter=router;