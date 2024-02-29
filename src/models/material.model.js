import mongoose, { Schema } from "mongoose";

const materialSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  description: {
    type: Object,
  },
});

export const Material = mongoose.model("Material", materialSchema);
