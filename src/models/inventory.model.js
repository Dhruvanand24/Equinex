import mongoose, { Schema } from "mongoose";

const warehouseQuantitySchema = new Schema({
  warehouseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Warehouse",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const inventoryschema = new Schema({
  materialID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material",
    required: true,
    index: true, // Add an index to improve query performance
    unique: true, // Ensure uniqueness for materialID
  },
  quantity: {
    type: Number,
    required: true,
  },
  warehouse: {
    type: [warehouseQuantitySchema], // Array of objects with warehouseId and quantity
    required: true,
  },
});

export const Inventory = mongoose.model("inventory", inventoryschema);
