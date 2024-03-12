import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Seller } from "../models/seller.model.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const CreateSeller = asyncHandler(async (req, res) => {
  const { name, email, address, phone, gst } = req.body;
  //console.log("email: ", email);
  if (
    [name, email, address].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedSeller = await Seller.findOne({
    $or: [{ phone }, { email }],
  });
  if (existedSeller) {
    throw new ApiError(409, "Seller with email or username already exists");
  }

  const seller = await Seller.create({
    name,
    email,
    phone,
    address,
    gst,
  });
  const createdseller = await Seller.findById(seller._id);
  if (!createdseller) {
    throw new ApiError(500, "Something Went wrong while registering the Seller");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdseller, "Seller created successfully"));
});
const GetAllSellers = asyncHandler(async (req, res) => {
  const allSellers = await Seller.find();

  if (!allSellers) {
    throw ApiError(500, "Could'nt get the Sellers");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, allSellers, "Got all Sellers successfully"));
});


export { CreateSeller,GetAllSellers };
