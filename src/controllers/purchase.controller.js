import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { PurchaseRequest } from "../models/purchaseRequest.model.js";
import { PurchaseOrder } from "../models/purchaseOrder.model.js";
import mongoose from "mongoose";
const CreatePurchaseRequest = asyncHandler(async (req, res) => {
  const {List_of_materials } = req.body;
  if (List_of_materials.length === 0) {
    throw new ApiError(500, "Couldn't find the materials!!");
  }

  const purchaserequest = await PurchaseRequest.create({
    Requester:req.user._id.toString(),
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
  if (List_of_materials.length === 0) {
    throw new ApiError(500, "Couldn't find the materials!!");
  }
  if(Seller===''){
    throw new ApiError(500, "Couldn't find the seller!!");
  }
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
const GetAllPurchaseRequest = asyncHandler(async (req, res) => {
  try {
    // Fetch all purchase orders sorted by creation date in descending order
    const allPurchaseOrders = await PurchaseRequest.find().sort({ createdAt: -1 });

    // Check if there are any purchase orders
    if (!allPurchaseOrders || allPurchaseOrders.length === 0) {
      throw new ApiError(404, "No purchase orders found");
    }

    // Respond with the array of purchase orders
    return res.status(200).json(new ApiResponse(200,allPurchaseOrders, "Successfull"));
  } catch (error) {
    // Handle errors
    console.error("Error fetching purchase orders:", error);
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
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
  GetAllPurchaseRequest
};
