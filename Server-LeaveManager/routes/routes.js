const express=require('express')
const router=express.Router()
const{createLeave,getLeave,updateLeave,deleteLeave,createStaff,getStaff}=require('../controller/officeController')

router.post('/leave',createLeave)
router.get('/leave',getLeave)
router.put('/leave/:id',updateLeave)
router.delete('/leave/:id',deleteLeave)

router.post('/staff',createStaff)
router.get('/staff',getStaff)

module.exports=router