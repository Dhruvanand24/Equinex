import mongoose, { Schema } from "mongoose";

const purchase_order_schema = new Schema(
  {
    Requester: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users", // currecnt login user
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
    Seller: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Sellers",
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
