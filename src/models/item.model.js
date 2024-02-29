import mongoose, { Schema } from "mongoose";

const itemSchema = new Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: Object,
  },
});

export const Item = mongoose.model("Item", itemSchema);
