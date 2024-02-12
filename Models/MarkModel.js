const mongoose = require("mongoose")

const markSchema=new mongoose.Schema(
    {
        UserID:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"students" //UserModel collection name
        },
        Mark1:{
            type:String,
            required:true
        },
        Mark2:{
            type:String,
            required:true
        },
        Mark3:{
            type:String,
            required:true
        },
        Mark4:{
            type:String,
            required:true
        },
        Mark5:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("marks",markSchema)