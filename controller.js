import { workout} from "./model.js";

const create = async(req,res)=>{
    try{
    const {user,date,duration,caloriesBurned,exercises}=req.body
    const newwork=new workout({user,date,duration,caloriesBurned,exercises})
    await newwork.save()
    res.json(newwork)
}catch(error){
    res.status(400).json({"error":"validation failed is required"})
}
}

const get=async(req,res)=>{
   try{
    const Workout  = await workout.findById(req.params.id)
    res.status(200).json({"work":workout})
    
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
