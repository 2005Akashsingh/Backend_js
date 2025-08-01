import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials:true
    }
))
app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded())
app.use(cookieParser())

// import router
import userRouter from "./routes/user.routes.js"

//router declaration
app.use("/users",userRouter)


export { app }