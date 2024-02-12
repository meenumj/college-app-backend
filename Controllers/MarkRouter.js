const express=require("express")
const markModel=require("../Models/MarkModel")

const router=express.Router()


router.post("/addmark",async(req,res)=>{
    let data=req.body
    let post = new markModel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })

})


router.get("/viewmark",async(req,res)=>{
    let result=await markModel.find()
    .populate("UserID","Name Email Rollno Admno College Parent -_id")
    .exec()
    res.json(result)
})


module.exports=router
