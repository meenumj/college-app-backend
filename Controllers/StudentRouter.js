const express = require("express")
const bcrypt = require("bcryptjs")
const studentModel=require("../Models/StudentModel")

const router=express.Router()

hashPasswordGenerator = async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/addstudent",async(req,res)=>{
    
    let {data}={"data":req.body}
    let Password=data.Password
    
        const hashedPassword=await hashPasswordGenerator(Password)
        data.Password=hashedPassword
            let student = new studentModel(data)
             let result = await student.save()
                res.json({
               status:"success"
                 })
        }
    )

module.exports=router