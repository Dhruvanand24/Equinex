import mongoose, { Schema } from "mongoose";

const warehouseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    ref: "Users"
  }
});

export const Warehouse = mongoose.model("Warehouse", warehouseSchema);
