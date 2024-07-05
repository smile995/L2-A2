import { Request, Response } from "express";
import { productService } from "./product.services";

const productPostController = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await productService.postAProduct(data)
        res.status(200).json({
            "success": true,
            "message": "Product created successfully!",
            "data": result
        })
    } catch (error) {
        console.log(error);

    }

}


export const productController = {
    productPostController
}