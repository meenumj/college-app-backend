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


    router.get("/viewstudents",async(req,res)=>{
        let data=await studentModel.find()
        res.json(data)
})



router.post("/login",async(req,res)=>{
    let input=req.body
    let Email=req.body.Email
    let data=await studentModel.findOne({"Email":Email})
    if (!data) {
        return  res.json({
            status:"Invalid User"
              })
    }
    console.log(data)
    let dbPassword=data.Password
    let inputPassword=req.body.Password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if (!match) {
        return  res.json({
            status:"Incorrect Password"
              })
    }

    res.json({
        status:"success","userData":data
          })

})

module.exports=router