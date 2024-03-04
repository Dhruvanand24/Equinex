import mongoose, { Schema } from "mongoose";

const stockTransferSchema = new Schema(
  {
    material_request_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MaterialRequests",
      required: true,
    },

    Approved_by_warehouse: {
      type: Boolean,
    },

    Intransit: {
      type: Boolean,
    },

    List_of_materials: [
      {
        material_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Materials",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    issuedby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    createdby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },

  {
    timestamps: true,
  }
);

export const StockTransferRequest = mongoose.model(
  "StockTransferRequest",
  stockTransferSchema
);
