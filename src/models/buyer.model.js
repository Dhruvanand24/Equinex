import mongoose, {Schema} from "mongoose";


const buyerschema = new Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        trim:true,
    },
    gst:{
        type:Number,
        required:true,
        trim:true
    }

})



export const Buyer = mongoose.model("Buyer", buyerschema)