import mongoose, { Schema } from "mongoose";

const purchase_request_schema = new Schema({
  Requester_name: {
    type: String,
    required: true,
  },
  List_of_items: {
    type: Object, //items with quantity
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
  Approved_by: {
    type: String,
    required: true,
  },
  is_GRN_created: {
    type: Boolean,
    required: true,
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
