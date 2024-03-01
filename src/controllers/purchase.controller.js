import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PurchaseRequest } from "../models/purchaseRequest.model.js";

const CreatePurchaseRequest = asyncHandler(async (req, res) => {
  const {
    Requester,
    Date_of_request,
    List_of_materials,
    isApproved,
    Approved_by,
    is_GRN_created,
    GRN_data,
    QC_data,
    UOC,
    GRN_close,
  } = req.body;

  const prReq = await PurchaseRequest.create({
    Requester,
    Date_of_request,
    List_of_materials,
    isApproved,
    Approved_by,
    is_GRN_created,
    GRN_data,
    QC_data,
    UOC,
    GRN_close,
  });
  if (!prReq) {
    throw new ApiError(
      500,
      "Something went wrong while creating the Purchase Request"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(200, prReq, "Purchase Reqcuest created successfully")
    );
});

export { CreatePurchaseRequest };
