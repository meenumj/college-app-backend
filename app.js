const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const studentRouter = require("./Controllers/StudentRouter")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/student",studentRouter)
//app.use("/api/student",)

mongoose.connect("mongodb+srv://meenumj:meenumj167@cluster0.uobnjw6.mongodb.net/collegeDb?retryWrites=true&w=majority",
 {useNewUrlParser:true})


app.listen(3001,()=>{
    console.log("Sever Running")
})
