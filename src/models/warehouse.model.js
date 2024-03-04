import mongoose, { Schema } from "mongoose";

const warehouseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  }
});

export const Warehouse = mongoose.model("Warehouse", warehouseSchema);
