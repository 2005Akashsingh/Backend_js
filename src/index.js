import dotenv from "dotenv";
dotenv.config();
// console.log(process.env.MONGODB_URL)
import connectdb from "./db/db.connect.js";


connectdb();
