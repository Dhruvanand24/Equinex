import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {Order} from "../models/orders.model.js";

const order = asyncHandler(async(req,res)=>{

    const {id} = req.params;
    const order = await Order.findById(id);

    const orderUpdates = req.body;

    if(!order){
        return res.send("No Order Found");
    }else{
        let updatedOrder = await Order.findByIdAndUpdate(id, orderUpdates, {runValidators: true});
        return res.status(201).json(
            new ApiResponse(200, "Order Updated Successfully")
        )
    }
})
export {order,}

// Order
// id1 : 65e03daaa09587114ba19341
// id2 : 65e03daaa09587114ba19342
// id2 : 65e05876b9c7f65ac5555f7f