import { Request, Response } from "express";
import { orderServices } from "./order.services";

// posting a opder
const orderPosting = async (req: Request, res: Response) => {
    const order = req.body;
    const result = await orderServices.postingAOrder(order);
    res.status(200).json({
        "success": true,
        "message": "Order created successfully!",
        "data":result
    })
}
// get all the order data
const getAllOrder =async(req:Request,res:Response)=>{
const result= await orderServices.getAllOrder();
res.status(200).json({
    "success": true,
    "message": "Orders fetched successfully!",
    "data":result
})
}

export const orderController={
    orderPosting,
    getAllOrder,
}