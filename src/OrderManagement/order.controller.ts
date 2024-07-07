import { Request, Response } from "express";
import { orderServices } from "./order.services";

// posting a opder
const orderPosting = async (req: Request, res: Response) => {
    try {
        const order = req.body;
        const result = await orderServices.postingAOrder(order);
        res.status(200).json({
            "success": true,
            "message": "Order created successfully!",
            "data": result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong to create an orders"
        })
    }
}
// get all the order data
const getAllOrder = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.getAllOrder();
        res.status(200).json({
            "success": true,
            "message": "Orders fetched successfully!",
            "data": result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong to fetched orders"
        })
    }
}

// finding order using order

const findByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.query
        const result = await orderServices.findBySearchingEmail(email as string);
        res.status(200).json({
            "success": true,
            "message": "Orders fetched successfully for user email!",
            "data": result
        })
    } catch {
        res.status(400).json({
            "success": false,
            "message": "Order not found"
        })
    }

}

export const orderController = {
    orderPosting,
    getAllOrder,
    findByEmail
}