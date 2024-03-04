import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { StockTransferRequest } from "../models/stockTransfer.model.js";

const createStockTransferRequest = asyncHandler(async(req, res)=> {
    const {material_request_id, List_of_materials, createdby } = req.body;
})