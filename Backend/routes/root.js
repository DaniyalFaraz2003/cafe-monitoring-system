const express = require("express")
const {
    login
} = require("../controllers/login")
const {
    dashboard
} = require("../controllers/dashboard")

const router = express.Router()


router.route("/").get((req, res) => {
    res.send("This is cool api v1")
})

router.route('/login').post(login)

// router.route('/dashboard').post(dashboard)

router.route("/home").get((req,res)=>{
    res.send('This is home page request')
})
router.route('/dashboard').get((req,res)=>{
    res.send('This is dashboard page request')
})

router.route('/report').get((req,res)=>{
    res.send('This is report page request')
})

module.exports = router