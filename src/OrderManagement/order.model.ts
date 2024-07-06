import { model, Schema } from "mongoose"
import { TOrder } from "./order.interface"

// type TOrder={
//     email:string,
//     productId:string,
//     price:number,
//     quantity:number
// }

const  orderSchema=new Schema<TOrder>({
    email:{type:String,required:true},
    productId:{type:String,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
})

// making model for order management
export const OrderManagement= model<TOrder>("OrderManagement",orderSchema)