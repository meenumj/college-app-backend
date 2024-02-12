const mongoose = require("mongoose")

const studentSchema=new mongoose.Schema(
    {
        Name:String,
        Rollno:String,
        Admno:String,
        College:String,
        Parent:String,
        Mobile:String,
        Email:String,
        Password:String
    }
)

module.exports=mongoose.model("students",studentSchema)