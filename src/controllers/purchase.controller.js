import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PurchaseRequest } from "../models/purchaseRequest.model.js";
import { PurchaseOrder } from "../models/purchaseOrder.model.js";

const CreatePurchaseRequest = asyncHandler(async (req, res) => {
  const {
    Requester,
    Date_of_request,
    List_of_materials,
    isApproved,
    Approved_by,
    Closed_by,
  } = req.body;

  const purchaserequest = await PurchaseRequest.create({
    Requester,
    Date_of_request,
    List_of_materials,
    isApproved,
    Approved_by,
    Closed_by,
  });
  if (!purchaserequest) {
    throw new ApiError(
      500,
      "Something went wrong while creating the Purchase Request"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        purchaserequest,
        "Purchase Reqcuest created successfully"
      )
    );
});

const CreatePurchaseOrder = asyncHandler(async (req, res) => {
  const { Requester, Date_of_request, List_of_materials, Seller } = req.body;

  const createdpurchaseorder = await PurchaseOrder.create({
    Requester,
    Date_of_request,
    List_of_materials,
    Seller,
  });

  if (!createdpurchaseorder) {
    throw new ApiError(
      500,
      "Something went wrong while creating the Purchase Order"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createdpurchaseorder,
        "Purchase Order created successfully"
      )
    );
});

export { CreatePurchaseRequest, CreatePurchaseOrder };
