const mongoose=require('mongoose')
const leaveSchema=new mongoose.Schema({
    department: {type:String,required:true},
    name: {type:String,required:true},
     startDate: {type:String,required:true},
       endDate: {type:String,required:true},
       status: {type:String,required:true}
},{timestamps:true})
module.exports=mongoose.model("Leave",leaveSchema)