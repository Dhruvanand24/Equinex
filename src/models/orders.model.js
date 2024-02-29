import mongoose, { Schema } from "mongoose";

const orderschema = new Schema({
  Order_By: {
    type: String,
    required: true,
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
    process: {
      type: Object, // Mr request, Mr receive, Plasma Cutting, Grianding, Bushing....
      required: true,
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
