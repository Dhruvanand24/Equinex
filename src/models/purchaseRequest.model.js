import mongoose, { Schema } from "mongoose";
const materials = new Schema({
  material_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});
const purchase_request_schema = new Schema(
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
    List_of_materials: [materials],
    isApproved: {
      type: Boolean,
      required: true,
    },
    Approved_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // the user id who have authority to approve
    },
    Closed_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // the user who convert purchase request to purchase order
    },
  },
  {
    timestamps: true,
  }
);

export const PurchaseRequest = mongoose.model(
  "PurchaseRequest",
  purchase_request_schema
);
