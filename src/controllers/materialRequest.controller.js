import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import {MaterialRequest} from "../models/materialRequest.model.js";

const materialRequest = asyncHandler(async(req,res)=>{
    
    const {id} = req.params;
    const materialRequest = await MaterialRequest.findById(id);

    const materialRequestUpdates = req.body;

    if(!materialRequest){
        return res.send("No Material Request Found");
    }else{
        let updatedMaterialRequest = await MaterialRequest.findByIdAndUpdate(id, materialRequestUpdates, {runValidators: true});
        return res.status(201).json(
            new ApiResponse(200, "Material Request Updated Successfully")
        )
    }
})

const challan = asyncHandler(async(req,res)=>{
    
    const {id} = req.params;
    const materialRequest = await MaterialRequest.findById(id);

    if (!materialRequest) {
        return res.send("No Material Request Found");
    } else {
        const { Status_approval } = materialRequest;

        if (Status_approval && Status_approval.is_approved) {
            // Challan is generated
            return res.status(201).json(
                new ApiResponse(200, "Challan generated successfully")
            )
        } else {
            // Status_approval.is_approved is not true
            return res.status(201).json(new ApiResponse(200, "All processes are not complete"));
        }
    }
})

export {materialRequest, challan}


// Material Request
// id1 : 65e04b21ef74f72a2a905992
// id2 : 65e04b21ef74f72a2a905995