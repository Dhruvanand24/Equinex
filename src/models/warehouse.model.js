import mongoose, {Schema} from "mongoose";


const warehouseSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    location: {
        type: Date,
        required: true
    },

})



export const Warehouse = mongoose.model("Warehouse", warehouseSchema)
