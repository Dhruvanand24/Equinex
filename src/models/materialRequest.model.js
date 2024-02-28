import mongoose, {Schema} from "mongoose";


const mr_request_schema = new Schema({
    Order_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders',
        required: true
    },
    Date_of_request: {
        type: Date, 
        required: true
    },
    List_of_items: {
        items:[{
            iteme:{
                type:Object,//items name, quantity
            }
        }]
    },
    Status_approval: {
        type: Object,// approved by, isapproved, approval data
        required:true
    },
    Department_requrest_raise: {
        type: Object,// request by, request department
        required:true
    },
    Store:{
        type:Object,// isissue, issu by, issue date
        required:true
    },
    Receive_in_Department: {
        type: Object,// received by, receiveing date
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



export const MaterialRequest = mongoose.model("MaterialRequest", mr_request_schema)
