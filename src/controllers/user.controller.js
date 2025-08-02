import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/apiError.js"
import { User } from "../models/user.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/apiResponse.js"
const registerUser = asyncHandler(async (req,res)=>{
    //getuser details
    //validation
    //check if user already exists
    //check for cover image , avatar
    //upload to cloudinary
    // create user object and create entry in db
    //remove password and refresh token from response
    //check if response created
    //return response
    

    const {fullname , username, email , password} = req.body()

    // if(fullname === ""){
    //     throw new ApiError(400,"Full name is required")
    // }

    if([fullname,username,email,password].some((field)=>{
        field?.trim() === ""
    })){
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = User.find({ $or:[{username},{email}]})

    if(existedUser){
        throw new ApiError(409,"User or email already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverimageLocalPath = req.files?.coverimage[0]?.path

    if(!avatarLocalPath){
        throw new ApiError(400,"avatar is required")
    }

    const avatar =  await uploadOnCloudinary(avatarLocalPath)
    const coverimage = await uploadOnCloudinary(coverimageLocalPath)

    const user = await User.create({
        fullname,
        avatar: avatar.url,
        coverimage: coverimage?.url || "",
        username,
        password,
        email
    })

    const createdUser =  await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, " something went wrong while regestering user")
    }

    return res.status(201).json(
        new ApiResponse(201,"user registerd sucessfully")
    )

})

export {registerUser}