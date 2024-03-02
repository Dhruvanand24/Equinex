import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { GRN } from "../models/grn.model.js";
import { PurchaseOrder } from "../models/purchaseOrder.model.js";

const CreateGRN = asyncHandler(async (req, res) => {
  const { userid, purchaseOrderId, receivedMaterials, date } = req.body;
  if ([userid, purchaseOrderId, date].some((feild) => feild?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  const createdGRN = await GRN.create({
    userid,
    purchaseOrderId,
    receivedMaterials,
    date,
  });

  if (!createdGRN) {
    throw new ApiError(500, "Something went wrong in creating of GRN");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdGRN, "GRN created successfully"));
});

const UpdateReceivedData = asyncHandler(async (req, res) => {
  const {
    _id,
    receivedQuantity,
    cost_of_material,
    unit_of_material,
    materialId,
  } = req.body;
  const grn = await GRN.findOne({ _id });

  if (!grn) {
    throw new ApiError(500, "Not found GRN");
  }

  const purchaseorderid = grn.purchaseOrderId;

  const purchaseorder = await PurchaseOrder.findOne({ _id: purchaseorderid });

  if (!purchaseorder) {
    throw new ApiError(500, "Not found purchase order as on grn");
  }

  const isMaterialIdPresentInPurchaseOrder =
     purchaseorder.List_of_materials.find(
      (material) => material.material_id.toString() === materialId
    );
  if (!isMaterialIdPresentInPurchaseOrder) {
    throw new ApiError(500, "Not found material id in purchase order");
  }

  const isMaterialPresent = grn.receivedMaterials.find(
    (material) => material.materialId.toString() === materialId
  );

  if (!isMaterialPresent) {
    grn.receivedMaterials.push({
      receivedQuantity,
      cost_of_material,
      unit_of_material,
      materialId,
    });
  } else {
    const index = grn.receivedMaterials.findIndex(
      (material) => material.materialId.toString() === materialId
    );

    grn.receivedMaterials[index] = {
      receivedQuantity,
      cost_of_material,
      unit_of_material,
      materialId,
    };
  }

  const updatedgrn = await grn.save();

  if (!updatedgrn) {
    throw new ApiError(500, "Something went wrong in updation of GRN");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, updatedgrn, "GRN updated successfully"));
});

export { CreateGRN, UpdateReceivedData };
