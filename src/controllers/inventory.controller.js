import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Inventory } from "../models/inventory.model.js";
import { Material } from "../models/material.model.js";



const updateInventory = async (req, res) => {
  try {
    const { material_id, warehouse_id, quantity } = req.body;

    // Validate input parameters
    if (!material_id || !warehouse_id || !quantity) {
      throw new ApiError(400, "Material ID, warehouse ID, and quantity are required");
    }

    // Fetch material name using material ID
    const material = await Material.findById(material_id);
    if (!material) {
      throw new ApiError(404, "Material not found");
    }

    // Check if material exists in inventory
    let inventory = await Inventory.findOne({ materialID: material_id });

    if (inventory) {
      // If material exists, update quantity and warehouse details
      const existingWarehouseIndex = inventory.warehouse.findIndex(
        (wh) => String(wh.warehouseId) === String(warehouse_id)
      );

      if (existingWarehouseIndex !== -1) {
        // If warehouse exists, update quantity
        inventory.warehouse[existingWarehouseIndex].quantity += Number(quantity);
      } else {
        // If warehouse does not exist, add new entry
        inventory.warehouse.push({ warehouseId: warehouse_id, quantity: Number(quantity) });
      }

      // Update total quantity
      inventory.quantity += Number(quantity);
      await inventory.save();
    } else {
      // If material does not exist, create new entry in inventory
      inventory = await Inventory.create({
        materialID: material_id,
        materialName: material.Name,
        quantity: Number(quantity),
        warehouse: [{ warehouseId: warehouse_id, quantity: Number(quantity) }],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Inventory updated successfully",
      data: inventory,
    });
  } catch (error) {
    console.error("Error updating inventory:", error);
    return res.status(error.statusCode || 500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};



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

export { getFullIventory, getMaterialStatus, updateInventory };
