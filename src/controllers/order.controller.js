import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Order } from "../models/orders.model.js";
import {Buyer} from "../models/buyer.model.js";
const CreateOrder = asyncHandler(async (req, res) => {
    const {
        Order_By,
        Date_of_Order,
        Paid_amount,
        Deal_amount,
        Deadline,
        production_process,
        Date_of_Delivery,
    } = req.body;

    // Find the buyer using Order_By
    const buyer = await Buyer.findById(Order_By);

    if (!buyer) {
        throw new ApiError(404, "Buyer not found");
    }

    // Extract the name from the buyer
    const Order_By_Name = buyer.name;
   
    // Create the order
    const order = await Order.create({
        Order_By,
        Date_of_Order,
        Paid_amount,
        Deal_amount,
        Deadline,
        production_process,
        Date_of_Delivery,
        Order_By_Name,
    });

    if (!order) {
        throw new ApiError(500, "Something went wrong while creating the order");
    }

    return res
        .status(201)
        .json(new ApiResponse(200, order, "Order created successfully"));
});

const GetAllOrder=asyncHandler(async(req,res)=>{
    const AllOrders=await Order.find();
    return res
        .status(201)
        .json(new ApiResponse(200, AllOrders, "Getting all order successfully"));
})

export { CreateOrder,GetAllOrder };