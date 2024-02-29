import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {MaterialRequest} from "../models/materialRequest.model.js";

const materialRequest = asyncHandler(async(req,res)=>{
    
    const {id} = req.params;
    const order = await MaterialRequest.findById(id)
    
    return res.status(201).json(
        new ApiResponse(200, `${order}`)
    )

})
export {materialRequest,}