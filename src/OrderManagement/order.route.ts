import express from 'express';
import { orderController } from './order.controller';
const router= express.Router();

// posting a order
router.post("/",orderController.orderPosting);
router.get("/",orderController.getAllOrder);
router.get("/search",orderController.findByEmail);



export const orderRouter= router;