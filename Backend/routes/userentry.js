const express=require('express')
const router=express.Router()

router.route('/').get((req,res)=>{
    res.send('This is user entry page request')
})

module.exports=router

