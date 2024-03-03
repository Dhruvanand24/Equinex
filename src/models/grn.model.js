import mongoose, { Schema } from "mongoose";

const qcSchema = new Schema({
  done_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  materialId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material",
    required: true,
  },
  rejectedQuantity: {
    type: Number,
    required: true,
  },
  acceptedQuantity: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const receivedMaterialSchema = new Schema({
  materialId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material",
    required: true,
  },
  receivedQuantity: {
    type: Number,
    required: true,
  },
  cost_of_material: {
    type: Number,
    required: true,
  },
  unit_of_material: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const grnSchema = new Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    purchaseOrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PurchaseOrder",
      required: true,
    },
    receivedMaterials: {
      type: [receivedMaterialSchema],
    },
    QC: {
      type: [qcSchema],
    },
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
