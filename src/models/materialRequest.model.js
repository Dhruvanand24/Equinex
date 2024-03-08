import mongoose, { Schema } from "mongoose";

const mr_request_schema = new Schema({
  Order_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orders",
    required: true,
  },
  Date_of_request: {
    type: Date,
    required: true,
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
  Status_approval: {
    type: Object, // approved by, isapproved, approval data
    required: true,
    default:{isapproved:false}
  },
  Department_request_raise: {
    type: Schema.Types.ObjectId,
    ref:"Department",
    required: true,
  },
  Store: {
    type: Object, // isissue, issu by, issue date
    // required: true,
  },
  Receive_in_Department: {
    type: Schema.Types.ObjectId,
    ref:"Department",
  },
  Receipt: {
    content: {
      type: Buffer,
      required: false, // Change to true if a receipt is always required
    },
    contentType: {
      type: String,
      required: false, // Change to true if a receipt is always required
    },
  },
});

export const MaterialRequest = mongoose.model(
  "MaterialRequest",
  mr_request_schema
);
