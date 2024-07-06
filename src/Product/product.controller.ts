import { Request, Response } from "express";
import { productService } from "./product.services";

// create a post  oparation
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
// finding all products from database
const findAllProduct = async (req: Request, res: Response) => {
    try {

        const result = await productService.findAllProducts();
        res.status(200).json({
            "success": true,
            "message": "Products fetched successfully!",
            "data": result
        })
    } catch (error) {
        console.log(error);

    }
}
// finding a product using id
const findAProductUsingId = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await productService.findAProduct(productId);
        res.status(200).json({
            "success": true,
            "message": "Product fetched successfully!",
            "data": result
        })
    } catch (error) {
        console.log(error);

    }
}

// update a product using id

const updateAProduct = async (req: Request, res: Response) => {
    const { updateId } = req.params
    const updatePrice = req.body.price;
    const updateDescription = req.body.description;
    const updateName = req.body.name;
    const updateCategory = req.body.category;

    const result = await productService.updateAProductById(updateId, {
        name: updateName,
        price: updatePrice,
        category: updateCategory,
        description: updateDescription
    })
    res.status(200).json({
        "success": true,
        "message": "Product updated successfully!",
        "data": result
    })
}

// delete a product from database using the id
const deleteProductById = async (req: Request, res: Response) => {
    const { deleteId } = req.params;
    const deleteProduct = await productService.deleteAProductFromDB(deleteId)
    res.json({
        "success": true,
        "message": "Product deleted successfully!",
        "data": null
    })
}
export const productController = {
    productPostController,
    findAllProduct,
    findAProductUsingId,
    updateAProduct,
    deleteProductById
}