const express=require('express')
const router=express.Router()

router.route('/').get((req,res)=>{
    res.send('This is home page request')
})

module.exports=router