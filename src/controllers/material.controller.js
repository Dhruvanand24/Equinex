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
    throw new ApiError(409, "Material with same name already exists");
  }
  console.log("hiiiiiii", existedMaterial)
  const material = await Material.create({
    Name,
    description,
  });
  console.log(material)
  if (!material) {
    throw new ApiError(500, "Something Went wrong while creating material");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, item, "material created successfully"));
});

const createMaterialRequest = asyncHandler(async (req, res) => {
  const {
    Order_Id,
    Date_of_request,
    List_of_items,
    Status_approval,
    Department_requrest_raise,
    Store,
    Receive_in_Department,
  } = req.body;

  const newrequest = await MaterialRequest.create({
    Order_Id,
    Date_of_request,
    List_of_items,
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
export { createMaterial, createMaterialRequest };
