import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {Order} from "../models/orders.model.js";

const order = asyncHandler(async(req,res)=>{
    
    const {id} = req.params;
    const order = await Order.findById(id)
    
    return res.status(201).json(
        new ApiResponse(200, `${order}`)
    )

})
export {order,}