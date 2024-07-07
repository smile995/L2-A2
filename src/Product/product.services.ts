import { Product } from "./product.interface"
import { productCollection } from "./product.model"

const postAProduct = async (product: Product) => {
    const result = await productCollection.create(product);
    return result;
}
const findAllProducts = async () => {
    const result = await productCollection.find();
    return result;
}

const findAProduct = async (id: String) => {
    const result = await productCollection.findById({ _id: id })
    return result;
}

const updateAProductById = async (id: String, projection: Object) => {
    const result = await productCollection.findByIdAndUpdate(id, projection);
    return result
}

const deleteAProductFromDB = async (id: String) => {
    const result = await productCollection.findByIdAndDelete({ _id: id });
    return result

}

const searchProductByName = async (search: string) => {
    const allProduct = await productCollection.find();
    const result = allProduct.filter(product =>
        product.name.toLowerCase().includes(search)

    )


    return result
}

export const productService = {
    postAProduct,
    findAllProducts,
    findAProduct,
    updateAProductById,
    deleteAProductFromDB,
    searchProductByName
}