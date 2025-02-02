import connectDB from "./db/index.js";
// require('dotenv').config()
import dotenv from "dotenv";
import app from './app.js'

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