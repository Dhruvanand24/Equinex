import mongoose, { Schema } from "mongoose";

const receivedMaterialSchema = new Schema({
  materialId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material",
    required: true,
  },
  receivedQuantity: {
    type: Number,
    required: true,
    defaulte: 1,
  },
  cost_of_material: {
    type: Number,
    required: true,
    defaulte: 1,
  },
  unit_of_material: {
    type: String,
    required: true,
    defaulte: "units",
  },
});
// {
//   "material_id": "65e0d6464c34defc27988221",
//   "quantity": 30,
//   "_id": "65e205161a51c43276b97bb7"
// },
// {
//   "material_id": "65e0d6f6309e712eb5639e87",
//   "quantity": 66,
//   "_id": "65e205161a51c43276b97bb8"
// }
const grnSchema = new Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId, // GRN created by
      ref: "User", // Reference to User model/schema
      required: true,
    },
    purchaseOrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PurchaseOrder",
      required: true,
    },
    receivedMaterials: [receivedMaterialSchema], // Array of received materials
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

export const GRN = mongoose.model("GRN", grnSchema);
