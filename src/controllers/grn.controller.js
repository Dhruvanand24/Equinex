import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { GRN } from "../models/grn.model.js";

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
  const { _id, receivedMaterials } = req.body;
  const grn = GRN.findOne({ _id });
  if (!grn) {
    throw new ApiError(500, "Not found GRN");
  }
});
export { CreateGRN, UpdateReceivedData };

// gpt
// import express from 'express';
// import { GRN } from './your-grn-model'; // Import your GRN model

// const router = express.Router();

// // Route to update received quantity for a material in a GRN by GRN ID and material ID
// router.post('/grn/:grnId/update-material/:materialId', async (req, res) => {
//   try {
//     const { grnId, materialId } = req.params;
//     const { receivedQuantity } = req.body;

//     // Find the GRN by ID
//     const grn = await GRN.findById(grnId);

//     if (!grn) {
//       return res.status(404).json({ message: 'GRN not found' });
//     }

//     // Find the material by ID in receivedMaterials array
//     const materialToUpdate = grn.receivedMaterials.find(
//       (material) => material.materialId.toString() === materialId
//     );

//     if (!materialToUpdate) {
//       return res.status(404).json({ message: 'Material not found in GRN' });
//     }

//     // Update the receivedQuantity of the material
//     materialToUpdate.receivedQuantity = receivedQuantity;

//     // Save the updated GRN
//     await grn.save();

//     return res.status(200).json({ message: 'Received quantity updated successfully', grn });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// export default router;
