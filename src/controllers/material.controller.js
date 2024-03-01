import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Material } from "../models/material.model.js";
import { MaterialRequest } from "../models/materialRequest.model.js";
const createMaterial = asyncHandler(async (req, res) => {
  const { Name, description } = req.body;

  if ([Name].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "Name Required");
  }

  const existedMaterial = await Material.findOne({
    Name,
  });

  if (existedMaterial) {
    throw new ApiError(409, "Material with the same name already exists");
  }

  const material = await Material.create({
    Name,
    description,
  });

  if (material) {
    return res
      .status(201)
      .json(new ApiResponse(200, material, "Material created successfully")); // Fix here, use `material` instead of `item`
  }

  throw new ApiError(500, "Something went wrong while creating material");
});

const createMaterialRequest = asyncHandler(async (req, res) => {
  const {
    Order_Id,
    Date_of_request,
    List_of_materials,
    Status_approval,
    Department_requrest_raise,
    Store,
    Receive_in_Department,
  } = req.body;

  const newrequest = await MaterialRequest.create({
    Order_Id,
    Date_of_request,
    List_of_materials,
    Status_approval,
    Department_requrest_raise,
    Store,
    Receive_in_Department,
  });

  if (!newrequest) {
    throw new ApiError(
      500,
      "Something Went wrong while creating material request"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(200, newrequest, "material request created successfully")
    );
});

const getAllMaterial = asyncHandler(async (req, res) => {
  const allMat = await Material.find();
  if (!allMat) {
    throw new ApiError(500, "Something Went wrong while getting materials");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, allMat, "material get successfully"));
});
const getAllMaterialRequest = asyncHandler(async (req, res) => {
  const allMatReq = await MaterialRequest.find();
  if (!allMatReq) {
    throw new ApiError(500, "Something Went wrong while getting materials");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, allMatReq, "material get successfully"));
});
export { createMaterial, createMaterialRequest, getAllMaterial, getAllMaterialRequest };
