import mongoose, {Schema} from "mongoose";


const mr_requrest_schema = new Schema({
    Order_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders', // Optional: Use it if you are referencing another model
        required: true
    },
    Date_of_request: {
        type: Date, 
        required: true
    },
    List_of_items: {
        items:[{}]
    },
    Deal_amount: {
        type: Number,
        required:true
    },
    Deadline: {
        type: Date,
        required:true
    },
    production_process: {
        process:[
            {
                Mr_request_initial:{
                    type:String,
                    required:true
                },
                Mr_goods_received:{
                    type:Boolean,
                    required:true
                },
                Receipt:{
                    content: {
                        type: Buffer,
                        required: false // Change to true if a receipt is always required
                    },
                    contentType: {
                        type: String,
                        required: false // Change to true if a receipt is always required
                    }
                }
                
            }
        ]
    },
    Date_of_Delivery: {
        type: Date,
    },
    Receipt:{
        content: {
            type: Buffer,
            required: false // Change to true if a receipt is always required
        },
        contentType: {
            type: String,
            required: false // Change to true if a receipt is always required
        }
    }

})



export const Company = mongoose.model("Orders", orderschema)
