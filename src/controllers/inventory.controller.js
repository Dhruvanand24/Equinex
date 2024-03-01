import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Inventory } from "../models/inventory.model.js";

const getFullIventory = asyncHandler(async (req, res) => {
  const fullInventory = await Inventory.find();
  if (!fullInventory) {
    throw new ApiError(401, "Inventory not found");
  }
  return res
    .status(201)
    .json(
      new ApiResponse(200, fullInventory, "Got Full inventory Successfully")
    );
});

const getMaterialStatus = asyncHandler(async (req, res) => {
  const { materialId } = req.body;
  if (!materialId) {
    throw new ApiError(400, "material Id required");
  }
  const materialData = await Inventory.findOne({ materialId });
  if (!materialData) {
    throw new ApiError(401, "Data with provided material id not found");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        materialData,
        "Request Successfull for getting material data"
      )
    );
});

export { getFullIventory, getMaterialStatus };
