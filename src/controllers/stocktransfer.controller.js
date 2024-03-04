import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { StockTransferRequest } from "../models/stockTransfer.model.js";

const createStockTransferRequest = asyncHandler(async (req, res) => {
  const { material_request_id, List_of_materials, createdby } = req.body;

  const createdStockTransferRequest = await StockTransferRequest.create({
    material_request_id,
    List_of_materials,
    createdby,
    Approved_by_warehouse: false,
    Intransit: false,
    createdby,
  });
  if (!createdStockTransferRequest) {
    throw new ApiError(
      500,
      "Something went wrong while creating the stock transfer request Order"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createdStockTransferRequest,
        "stock transfer request created successfully"
      )
    );
});
const updateApproval = asyncHandler(async (req, res) => {
  const { StockTransferRequestid, status } = req.body;

  StockTransferRequest.findByIdAndUpdate(
    StockTransferRequestid,
    {
      $set: {
        Approved_by_warehouse: true,
      },
    },
    { new: true }
  );
  return res
    .status(200)
    .json(new ApiResponse(200, user, "Approved successfully"));
});

const updateTransit = asyncHandler(async (req, res) => {
  const { StockTransferRequestid, status } = req.body;

  StockTransferRequest.findByIdAndUpdate(
    StockTransferRequestid,
    {
      $set: {
        Intransit: true,
      },
    },
    { new: true }
  );
  return res
    .status(200)
    .json(new ApiResponse(200, user, "Approved successfully"));
});

export { createStockTransferRequest, updateApproval, updateTransit };
