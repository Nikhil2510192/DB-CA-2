import mongoose from "mongoose";
import "dotenv/config"

const connectDB= async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected successfully")
    }catch(error){
        throw error
    }
}

export {connectDB}