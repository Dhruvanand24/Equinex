import mongoose, { Schema } from "mongoose";

const materialIssue = new Schema({
  warehouseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  DepartmentId: {
     type: mongoose.Schema.Types.ObjectId,
     required: true,
  },
  MaterialID: {
     type: mongoose.Schema.Types.ObjectId,
     required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
  IssuedByID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  materialRequestID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  }

},
{
    timestamps: true
});

export const MaterialIssue = mongoose.model("MaterialIssue", materialIssue);