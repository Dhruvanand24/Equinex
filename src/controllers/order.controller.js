import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Order } from "../models/orders.model.js";

const CreateOrder = asyncHandler(async (req, res) => {
    const {
        Order_By,
        Order_By_id,
        Date_of_Order,
        Paid_amount,
        Deal_amount,
        Deadline,
        production_process,
        Date_of_Delivery,
    } = req.body;

   

    const order = await Order.create({
        Order_By,
        Order_By_id,
        Date_of_Order,
        Paid_amount,
        Deal_amount,
        Deadline,
        production_process,
        Date_of_Delivery
    });

    if (!order) {
        throw new ApiError(500, "Something went wrong while creating the order");
    }

    return res
        .status(201)
        .json(new ApiResponse(200, order, "Order created successfully"));


});

export { CreateOrder };