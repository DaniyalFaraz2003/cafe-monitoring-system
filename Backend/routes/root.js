const express = require("express")
const { login } = require("../controllers/login")
const { getTreeData } = require("../controllers/treeData")
const { dashboard, pie_chart } = require("../controllers/dashboard")
const { UserEntryForm } = require("../controllers/UserEntryForm")


const router = express.Router()


router.route('/login').post(login);
router.route('/treeData/:city').get(getTreeData);
router.route('/dashboard').post(pie_chart)
router.route('/UserEntryForm').post(UserEntryForm)



module.exports = router