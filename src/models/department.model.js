import mongoose, { Schema } from "mongoose";

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
  },
  departmentHead: {
    type: Schema.Types.ObjectId,
    ref: "User", // Make sure "User" matches the model name for the referenced user
    required: true,
  },
});

export const Department = mongoose.model("Department", departmentSchema);
