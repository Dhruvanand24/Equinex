import mongoose, {Schema} from "mongoose";


const processschema = new Schema({
    name:{
        type: String, 
        required: true
    }
})



export const Process = mongoose.model("Process", processschema)