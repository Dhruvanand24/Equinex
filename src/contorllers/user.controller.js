import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req,res)=>{
     // get user details from frontend
     // validation - not empty
     // check if user already exists: username, email
     // create user object - create entry in db
     // remove password and refresh token field from response
     // check for user creation 
     // return response

     const {fullName, email, username, password} = req.body
     //console.log("email: ", email);
     if([fullName, email, username, password].some((field)=>field?.trim()=== "")){
            throw new ApiError(400, "All fields are required")
     }

     const existedUser = await User.findOne({
        $or: [{ username }, { email }]
     })
     if(existedUser){
        throw new ApiError(409, "User with email or username already exists")
     }

   const user = await User.create({
        fullName,
        email,
        password,
        username: username.toLowerCase()

    })
    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if (!createdUser){
        throw new ApiError(500, "Something Went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )


})

export {registerUser,}