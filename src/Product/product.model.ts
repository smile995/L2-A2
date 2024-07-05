import { model, Schema } from "mongoose";
import { inventory, Product, variants } from "./product.interface";


const variantSchema = new Schema<variants>({
    type: { type: String, required: true },
    value: { type: String, required: true }
})

const inventorySchema = new Schema<inventory>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
})


const productSchema = new Schema<Product>({
    name: {type:String, required:true},
    description: {type:String,required:true},
    price: {type:Number, required:true},
    category: {type:String, required:true},
    tags: {type:[String], required:true},
    variants: [variantSchema],
    inventory: inventorySchema
})

// Creating a model
export const productCollection= model<Product>("productCollection",productSchema)