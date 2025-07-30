import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloudname: process.env.CLOUDINARY_CLOUDNAME,
    apikey: process.env.CLOUDINARY_APIKEY,
    apisecret: process.env.CLOUDINARY_APISECRET
})


const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath)return null

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto",
        })

        fs.unlinkSync(localFilePath)
        return response
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}