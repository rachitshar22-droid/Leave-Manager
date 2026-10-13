const mongoose=require('mongoose')
const staffSchema=new mongoose.Schema({
    department: {type:String,required:true},
       staffName:  {type:String,required:true},
       totalLeave: {type:String,required:true},
},{timestamps:true})
module.exports=mongoose.model("Staff",staffSchema)