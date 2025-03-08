import express from "express"
import { connectDB } from "./db.js"
import "dotenv/config"
import { router } from "./routes.js"
const port=process.env.PORT
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hii")
})
app.use('/user',router)
 app.listen(port,async ()=>{
    await connectDB()
    console.log("server is running")

})