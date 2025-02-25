import mongoose from "mongoose";

const schema =new mongoose.schema({
    user:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    duration :{
        type:Number,
        required:true
    },
    caloriesBurned:{
        type:Number,
        required:true
    },
    exercises:[{
        name:{
            type:String,
            required:true
        },
        reps:{
            type:Number,
        },
        sets:{
            type:Number,
        },
        weight:{
            type:Number,
        },
    }]
})
const workout=mongoose.model('workout',schema)
export {workout}