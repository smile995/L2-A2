
import { TOrder } from "./order.interface";
import { OrderManagement } from "./order.model";

// posting a order
const postingAOrder=async(order:TOrder)=>{
const  result= await OrderManagement.create(order);
return result;
}
// get all the order
const getAllOrder=async()=>{
const result =await OrderManagement.find();
return result
}

export const orderServices={
    postingAOrder,
    getAllOrder
}