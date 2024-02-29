import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Process } from "../models/process.model.js";

const CreateProcess = asyncHandler(async (req, res) => {
    const {
        name
    } = req.body;

    if (
        [
            name
        ].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const process = await Process.create({
       name
    });

    if (!process) {
        throw new ApiError(500, "Something went wrong while creating the order");
    }

    return res
        .status(201)
        .json(new ApiResponse(200, process, "Process created successfully"));


});

export { CreateProcess };