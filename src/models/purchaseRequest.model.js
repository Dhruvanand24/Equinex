import mongoose, { Schema } from "mongoose";

const purchase_request_schema = new Schema({
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
  isApproved: {
    type: Boolean,
    required: true,
  },
  Approved_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // the user id who have authority to approve
  },
  is_GRN_created: {
    type: Boolean,
    required: true,
    default: false,
  },
  GRN_data: {
    type: Object, // created by, date, quantity recived, quantity orderd, ... etc view grn slip for refrence
    //this data can also export as pdf
  },
  QC_data: {
    type: Object, // view a qc report for refrence
  },
  UOC: {
    type: Object, //view a UOC report for refrence /// only conversion lots in pices like kg to metel sheets
  },
  GRN_close: {
    type: Object, //final report, aggrigate data of GRN, QC, UOC
  },
});

export const PurchaseRequest = mongoose.model(
  "PurchaseRequest",
  purchase_request_schema
);
