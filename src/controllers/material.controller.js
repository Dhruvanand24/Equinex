import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Material } from "../models/material.model.js";
import { MaterialRequest } from "../models/materialRequest.model.js";
import { MaterialIssue } from "../models/materialIssue.model.js";

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
      .json(new ApiResponse(200, material, "Material created successfully")); // Fix here, use material instead of item
  }

  throw new ApiError(500, "Something went wrong while creating material");
});

const createMaterialIssue = asyncHandler(async (req, res) => {
  const { warehouseID, DepartmentId, MaterialID, Quantity, materialRequestID } =
    req.body;

  const IssuedByID = req.user._id;

  const data = {
    warehouseID,
    DepartmentId,
    MaterialID,
    Quantity,
    materialRequestID,
    IssuedByID,
  };

  // Create the material issue
  const materialIssue = await MaterialIssue.create(data);

  if (!materialIssue) {
    throw new ApiError(500, "Failed to create material issue");
  }

  // Update inventory
  await updateInventory(MaterialID, warehouseID, -Quantity);

  return res
    .status(201)
    .json(
      new ApiResponse(200, materialIssue, "Material issue created successfully")
    );
});
const updateInventory = async (materialID, warehouseID, quantityChange) => {
  // Fetch the inventory item corresponding to the material ID
  let inventoryItem = await Inventory.findOne({ materialID });

  if (!inventoryItem) {
    throw new ApiError(404, "Inventory item not found");
  }

  // Update the quantity of the material in the inventory
  inventoryItem.quantity -= quantityChange;

  // Update the quantity of the material in the specific warehouse
  const warehouseIndex = inventoryItem.warehouse.findIndex(
    (wh) => String(wh.warehouseId) === String(warehouseID)
  );

  if (warehouseIndex !== -1) {
    inventoryItem.warehouse[warehouseIndex].quantity -= quantityChange;
  }

  // Save the updated inventory item
  await inventoryItem.save();
};

const getAllMaterialIssue = asyncHandler(async (req, res) => {
  // Fetch all material issues
  const allMaterialIssues = await MaterialIssue.find().sort({ created_at: -1 });

  if (!allMaterialIssues || allMaterialIssues.length === 0) {
    throw new ApiError(404, "No material issues found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        allMaterialIssues,
        "Successfully fetched all material issues"
      )
    );
});

const createMaterialRequest = asyncHandler(async (req, res) => {
  const { Order_Id, List_of_materials, Department_request_raise } = req.body;

  if (List_of_materials.length === 0) {
    throw new ApiError(500, "Couldn't get the materials");
  }

  if (List_of_materials.length === 0) {
    throw new ApiError(500, "Couldn't get the materials");
  }

  const newrequest = await MaterialRequest.create({
    Order_Id,
    Date_of_request: Date.now(),
    List_of_materials,
    Department_request_raise,
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
  const allMaterialRequest = await MaterialRequest.find().sort({
    Date_of_request: -1,
  });
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

const updateMaterialRequest = asyncHandler(async (req, res) => {
  const { _id, Status } = req.body;
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

  console.log(req.user._id.toString(), _id, Status);

  const data = {
    Status_approval: {
      isapproved: Status,
      approved_by: req.user._id.toString(),
      approved_by_name: req.user.fullName,
    },
  };
  const materialrequest = await MaterialRequest.findOne({ _id: _id.trim() });
  if (!materialrequest) {
    throw new ApiError(
      500,
      "Something Went wrong while getting material request for updation"
    );
  }
  const updatedMaterialRequest = await MaterialRequest.findByIdAndUpdate(
    _id,
    data,
    { new: true }
  );

  if (!updatedMaterialRequest) {
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
});

const getMaterialById = asyncHandler(async (req, res) => {
  const { material_id } = req.body;

  if ([material_id].some((field) => field.trim() === "")) {
    throw new ApiError(500, "Provided id is not in proper format!");
  }

  const material = await Material.findOne({ _id: material_id });

  if (!material) {
    throw new ApiError(500, "Enter a valid Material ID");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, material, "Got the material Successfully"));
});

const getMaterialRequestById = asyncHandler(async (req, res) => {
  const { materialRequest_id } = req.body;

  if ([materialRequest_id].some((field) => field.trim() === "")) {
    throw new ApiError(500, "Provided id is not in proper format!");
  }

  const materialrequest = await MaterialRequest.findOne({
    _id: materialRequest_id,
  });

  if (!materialrequest) {
    throw new ApiError(500, "Enter a valid Material Request ID");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        materialrequest,
        "Got the materialrequest Successfully"
      )
    );
});
export {
  createMaterial,
  createMaterialRequest,
  getAllMaterial,
  getAllMaterialRequest,
  updateMaterialRequest,
  getMaterialById,
  getMaterialRequestById,
  createMaterialIssue,
  getAllMaterialIssue,
};
