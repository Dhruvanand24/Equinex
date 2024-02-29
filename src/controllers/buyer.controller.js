import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Buyer } from "../models/buyer.model.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const CreateBuyer = asyncHandler(async (req, res) => {
  const { name, email, address, phone, gst } = req.body;
  //console.log("email: ", email);
  if (
    [name, email, address, phone, gst].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedBuyer = await Buyer.findOne({
    $or: [{ phone }, { email }],
  });
  if (existedBuyer) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const buyer = await Buyer.create({
    name,
    email,
    phone,
    address,
    gst,
  });
  const createdBuyer = await Buyer.findById(buyer._id);
  if (!createdBuyer) {
    throw new ApiError(500, "Something Went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdBuyer, "Buyer created successfully"));
});

export { CreateBuyer };