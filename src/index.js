import connectDB from "./db/index.js";
// require('dotenv').config()
import dotenv from "dotenv";

dotenv.config()

connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`Mongodb connection failed`, err)
})