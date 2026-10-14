const{PrismaClient}=require('@prisma/client')
const prisma=new PrismaClient()

const createLeave=async (req, res) => {
    try {
        const allData=await prisma.leaveRequest.create({
            data:{
                employeeId:parseInt(req.body.employeeId),
                category:req.body.category,
                startDate: new Date(req.body.startDate),
                endDate: new Date(req.body.endDate),
                reason: req.body.reason,
                status:req.body.status||"Pending"
            }
        })
        res.json({sucess:true,message:"Hogya"})
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const getLeave= async (req, res) => {
    try {
        const find=await prisma.leaveRequest.findMany({
            include: {employee:true}
        })
        res.json(find)
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const createStaff= async (req, res) => {
    try {
        const create=await prisma.employee.create({
            data:req.body
        })
        res.json({sucess:true,message:"Hogya Bhai"})
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const getStaff= async (req, res) => {
    try {
       const staff=await prisma.employee.findMany()
       res.json(staff)
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const updateLeave= async (req, res) => {
    try {
       const update=await prisma.leaveRequest.update({
        where: {id: parseInt(req.params.id)},
        date:body
       })
       res.json({sucess:true,data:update})
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const deleteLeave=async(req,res)=>{
    try{
        await prisma.leaveRequest.delete({
            where:{id:parseInt(req.params.id)}
        })
        res.json({sucess:true,message:"Hogya Delete"})
    }catch(error){
         res.status(500).json({sucess:false,error:error.message})
    }
}
module.exports={createLeave,getLeave,updateLeave,deleteLeave,createStaff,getStaff}