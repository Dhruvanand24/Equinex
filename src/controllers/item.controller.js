import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Item } from "../models/item.model.js";

const createItem = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  if ([name].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "Name Required");
  }
  const existedItem = await Item.findOne({
    name,
  });
  if (existedItem) {
    throw new ApiError(409, "item with same name already exists");
  }
  const item = await Item.create({
    name,
    description,
  });
  if (!item) {
    throw new ApiError(500, "Something Went wrong while creating item");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, item, "item created successfully"));
});
export { createItem };
