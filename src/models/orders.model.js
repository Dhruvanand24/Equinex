import mongoose, { Schema } from "mongoose";

const orderschema = new Schema({
  Order_By: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Buyers"
  },
  Order_By_Name: {
    type: String,
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
    type:Array,
    required:true
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
},
{
  timestamps: true
});

export const Order = mongoose.model("Order", orderschema);
