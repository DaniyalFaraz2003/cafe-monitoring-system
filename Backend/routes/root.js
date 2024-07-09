const express = require("express")

const router = express.Router()


router.route("/").get((req, res) => {
    res.send("This is cool api v1")
})

module.exports = router