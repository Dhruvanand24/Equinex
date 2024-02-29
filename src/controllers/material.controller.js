import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Material } from "../models/material.model.js";

const createMaterial = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  if ([name].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "Name Required");
  }
  const existedMaterial = await Material.findOne({
    name,
  });
  if (existedMaterial) {
    throw new ApiError(409, "Material with same name already exists");
  }
  const material = await Material.create({
    name,
    description,
  });
  if (!material) {
    throw new ApiError(500, "Something Went wrong while creating material");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, item, "material created successfully"));
});
export { createMaterial };
