import mongoose, { Schema } from "mongoose";

const purchase_order_schema = new Schema(
  {
    Requester: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // currecnt login user
    },
    Date_of_request: {
      type: Date,
      required: true,
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

export const PurchaseOrder = mongoose.model(
  "PurchaseOrder",
  purchase_order_schema
);
