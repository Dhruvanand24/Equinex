import mongoose, {Schema} from "mongoose";


const mr_requrest_schema = new Schema({
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
    Department_recivence: {
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



export const Company = mongoose.model("MaterialRequest", mr_requrest_schema)
