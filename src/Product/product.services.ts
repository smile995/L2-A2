import { Product } from "./product.interface"
import { productCollection } from "./product.model"

const postAProduct=async(product:Product)=>{
const result= await productCollection.create(product);
return result;
}

export const productService={
    postAProduct
}