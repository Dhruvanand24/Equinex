import mongoose, { Schema } from "mongoose";

const grnSchema = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  quntityReceived: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
},
{
    timestamps: true
});

export const GRN = mongoose.model("GRN", grnSchema);
