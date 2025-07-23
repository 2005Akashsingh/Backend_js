import dotenv from "dotenv"
dotenv.config()
// console.log(process.env.MONGODB_URL)


import connectdb from "./db/db.connect.js"

import {app} from "./app.js"

app.get("/ash",(req,res)=>{
    res.send("app is running ash server")
})

connectdb()
.then(() => {
  const port = process.env.PORT || 8000
  app.listen(port, () => {
    console.log("port is running on server: ", port)
  })
})
.catch((error)=>{
    console.log("database connection failed ",error)
})
