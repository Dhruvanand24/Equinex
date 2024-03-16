import mongoose, { Schema } from "mongoose";
const materials = new Schema({
  material_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Materials",
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
      ref: "Users", // currecnt login user
    },
    List_of_materials: [materials],
    isApproved: {
      type: Boolean,
      required: true,
      default:false,
    },
    Approved_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", // the user id who have authority to approve
    },
    Closed_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users", // the user who convert purchase request to purchase order
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
