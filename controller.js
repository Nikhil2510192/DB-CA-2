import { workout, workout } from "./model";

const create = async(req,res)=>{
    try{
    const {user,date,duration,caloriesBurned,exercises}=req.body
    const newwork={user,date,duration,caloriesBurned,exercises}
    await newwork.save()
}catch(error){
    res.status(400).json({"error":"validation failed:[field] is required"})
}
}

const get=async(req,res)=>{
   try{
    const workout=await workout.findById(req.params.id)
    
   }
   catch(error)
   {res.status(404).json({"error":"workout not found"})}

}

const put=async(req,res)=>{
    try{
     const workout=await workout.findByIdAndUpdate(req.params.id,req.body)
     
    }
    catch(error)
    {res.status(404).json({"error":"workout not found"})}
 
 }
 const deleteworkout=async(req,res)=>{
    try{
     const workout=await workout.findByIdAndDelete(req.params.id,req.body)
    }
    catch(error)
    {res.status(404).json({"error":"workout not found"})}
 
 }
export{create,put,deleteworkout,get}
