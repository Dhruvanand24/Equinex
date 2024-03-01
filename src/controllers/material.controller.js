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
  const allMaterials = await Material.find();
  if (!allMaterials) {
    throw new ApiError(500, "Something Went wrong while getting materials");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, allMaterials, "material get successfully"));
});

const getAllMaterialRequest = asyncHandler(async (req, res) => {
  const allMaterialRequest = await MaterialRequest.find();
  if (!allMaterialRequest) {
    throw new ApiError(
      500,
      "Something Went wrong while getting material request"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        allMaterialRequest,
        "material request get successfully"
      )
    );
});

const updateMaterialRequest = asyncHandler(async(req,res)=>{
  const {_id,data}=req.body;
  //example of req.body
  // {
  //   "_id":"65e0dc098dd0e98626e5959a",
  //   "data":{
  //     "Store": {
  //       "isissue": true,
  //       "issue_by": "testme",
  //       "issue_date": "ajj ka din"
  //     }
  //   }
    
  // }
  const materialrequest=await MaterialRequest.findOne({_id});
  if (!materialrequest) {
    throw new ApiError(
      500,
      "Something Went wrong while getting material request for updation"
    );
  }

  const updatedMaterialRequest = await MaterialRequest.findByIdAndUpdate(_id, data, { new: true });

  if(!updatedMaterialRequest){
    throw new ApiError(
      500,
      "Something Went wrong while updating material request"
    );
  }
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        updatedMaterialRequest,
        "material request updated successfully"
      )
    );

})
export {
  createMaterial,
  createMaterialRequest,
  getAllMaterial,
  getAllMaterialRequest,
  updateMaterialRequest
};
