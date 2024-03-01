import mongoose, { Schema } from "mongoose";

const sellerschema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  gst: {
    type: Number,
    required: true,
    trim: true,
  },
});

export const Seller = mongoose.model("Seller", sellerschema);
