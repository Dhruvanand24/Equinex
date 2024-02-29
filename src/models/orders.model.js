import mongoose, { Schema } from "mongoose";

const orderschema = new Schema({
  Order_By: {
    type: String,
    required: true,
  },
  Order_By_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Buyer",
  },
  Date_of_Order: {
    type: Date,
    required: true,
  },
  Paid_amount: {
    type: Number,
    required: true,
  },
  Deal_amount: {
    type: Number,
    required: true,
  },
  Deadline: {
    type: Date,
    required: true,
  },
  production_process: {
    type: [mongoose.Schema.Types.ObjectId], // Mr request, Mr receive, Plasma Cutting, Grianding, Bushing....
    ref: "Process",
  },
  Date_of_Delivery: {
    type: Date,
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

export const Order = mongoose.model("Order", orderschema);
