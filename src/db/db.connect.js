import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

const connectdb = async ()=>{
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${db.connection.host}`);
    } catch (error) {
        console.log("Db connection error", error)
    }
}

export default connectdb