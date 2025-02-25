import express from "express"
import { connectDB } from "./db.js"
import "dotenv/config"
import { router } from "./routes.js"
port=process.env.PORT
const app = express()
app.use(express.json)
app.get('/',(req,res)=>{
    res.send("hii")
})
app.use('/user',router)
 app.listen(port,async (req,res)=>{
  try{
    await connectDB()
    console.log("server is running")
  }
  catch(error){
          res.status(500).json({"error":"something went wrong"})
  }
})