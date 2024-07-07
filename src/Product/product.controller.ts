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
        res.json({
            "success": false,
            "message": "Oops! Product created unsuccessful!" || error,

        })
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
        res.json({
            "success": false,
            "message": "Sorry! Product created unsuccessful!" || error

        })
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
        res.status(400).json({
            "success": false,
            "message": "Product fetched successfully!" || error
        })
    }
}

// update a product using id

const updateAProduct = async (req: Request, res: Response) => {
    try {
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
    } catch (error) {
        res.status(400).json({
            "success": true,
            "message": "Sorry! Product not updated successfully!",
          
        })
    }
}

// delete a product from database using the id
const deleteProductById = async (req: Request, res: Response) => {
    try {
        const { deleteId } = req.params;
        const deleteProduct = await productService.deleteAProductFromDB(deleteId)
        res.json({
            "success": true,
            "message": "Product deleted successfully!",
            "data": null
        })
    } catch {
        res.status(400).json({
            "success": false,
            "message": "Something went wrong",

        })
    }
}

// searching a product using the searching query

const searchProductByName = async (req: Request, res: Response) => {
    const search=req.query.searchTerm as string;
    const SMsearch= search?.toLocaleString()as string;
    const result= await productService.searchProductByName(SMsearch)
    res.json({
        result
    })


}
export const productController = {
    productPostController,
    findAllProduct,
    findAProductUsingId,
    updateAProduct,
    deleteProductById,
    searchProductByName
}