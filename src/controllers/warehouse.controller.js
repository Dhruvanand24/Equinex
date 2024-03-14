import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Warehouse } from "../models/warehouse.model.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const CreateWarehouse = asyncHandler(async (req, res) => {
  const { name, manager_id} = req.body;
  //console.log("email: ", email);
 
 
  const warehouse = await Warehouse.create({
    name,
    manager_id
  });
  const createdWarehouse = await Warehouse.findById(warehouse._id);
  if (!createdWarehouse) {
    throw new ApiError(500, "Something Went wrong while registering the warehouse");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdWarehouse, "Warehouse created successfully"));
});

const GetAllWarehouse = asyncHandler(async (req, res) => {
  const allWarehouse = await Warehouse.find();

  if (!allWarehouse) {
    throw ApiError(500, "Could'nt get the Warehouses");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, allWarehouse, "Got all Warehouses successfully"));
});

export { CreateWarehouse, GetAllWarehouse };