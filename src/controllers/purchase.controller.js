import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PurchaseRequest } from "../models/purchaseRequest.model.js";
import { PurchaseOrder } from "../models/purchaseOrder.model.js";

const CreatePurchaseRequest = asyncHandler(async (req, res) => {
  const {
    Requester,
    List_of_materials,
  } = req.body;

  const purchaserequest = await PurchaseRequest.create({
    Requester,
    List_of_materials,
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

const GetAllMaterialListOfPurchaseOrder = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  const purchaseOrder = await PurchaseOrder.findOne({ _id });

  if (!purchaseOrder) {
    throw new ApiError(500, "Purchase Order not found!");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        purchaseOrder.List_of_materials,
        "List of materials get succsfully"
      )
    );
});

export {
  CreatePurchaseRequest,
  CreatePurchaseOrder,
  GetAllMaterialListOfPurchaseOrder,
};
