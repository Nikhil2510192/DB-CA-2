import mongoose from "mongoose";
import "dotenv/config"

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected successfully")
    }catch(error){
        res.status(500).json({"error":"something went wrong"})
    }
}

export {connectDB}