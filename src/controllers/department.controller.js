import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {Department} from "../models/department.model.js";
import {User} from "../models/user.model.js";
const CreateDepartment = asyncHandler(async (req, res) => {
  const { name, description, departmentHead } = req.body;

  if ([name, description, departmentHead].some((item) => item?.trim() === "")) {
    throw new ApiError(500, "All fields are required");
  }

  const isuserexists = await User.findOne({ _id: departmentHead });
  if (!isuserexists) {
    throw new ApiError(500, "departmentHead Not found");
  }
  //post checking will be added

  const newdepartment = await Department.create({
    name,
    description,
    departmentHead,
  });

  if (!newdepartment) {
    throw new ApiError(500, "Something went wrong in creation of department");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(200, newdepartment, "Department created Successfully")
    );
});
export { CreateDepartment };