import express from "express"
import {create,put,deleteworkout,get} from ".controller.js"
const router=express.Router()
router.post('/post',create)
router.get('/get',get)
router.put('/put/:id',put)
router.delete('/post/id:',deleteworkout)
export{router}