import mongoose, { Schema } from "mongoose";

const stockTrasnferSchema = new Schema(
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
          ref: "Material",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    Seller: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Seller",
    },
  },
  {
    timestamps: true,
  }
);

export const StockTransferRequest = mongoose.model(
  "StockTransferRequest",
  stockTrasnferSchema
);
