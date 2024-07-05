import { Product } from "./product.interface"
import { productCollection } from "./product.model"

const postAProduct=async(product:Product)=>{
const result= await productCollection.create(product);
return result;
}
const findAllProducts=async()=>{
const result= await productCollection.find();
return result;
}

export const productService={
    postAProduct,
    findAllProducts
}