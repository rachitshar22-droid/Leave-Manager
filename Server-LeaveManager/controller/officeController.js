const Leave=require('../models/Leave')
const Staff=require('../models/Staff')

const createLeave=async (req, res) => {
    try {
        req.body.status="Pending"
        const chodu = new Leave(req.body)
        await chodu.save()
        res.json({ sucess: true, message: "Hogya" })
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const getLeave= async (req, res) => {
    try {
        const lodo = await Leave.find()
        res.json(lodo)
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const createStaff= async (req, res) => {
    try {
        const chodu = new Staff(req.body)
        await chodu.save()
        res.json({ sucess: true, message: "Hogya Bhai" })
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const getStaff= async (req, res) => {
    try {
        const lodo = await Staff.find()
        res.json(lodo)
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const updateLeave= async (req, res) => {
    try {
        const update = await Leave.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json({ sucess: true, data: update })
    } catch (error) {
        res.status(500).json({ sucess: false, error: error.message })
    }
}

const deleteLeave=async(req,res)=>{
    try{
        await Leave.findByIdAndDelete(req.params.id)
        res.json({sucess:true,message:"Hogya Delete"})
    }catch(error){
         res.status(500).json({sucess:false,error:error.message})
    }
}
module.exports={createLeave,getLeave,updateLeave,deleteLeave,createStaff,getStaff}