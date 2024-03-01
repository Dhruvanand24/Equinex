import mongoose, { Schema } from "mongoose";

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Company = mongoose.model("Company", companySchema);
