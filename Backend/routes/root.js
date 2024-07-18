const express = require("express")
const { login } = require("../controllers/login")
const { getTreeData } = require("../controllers/treeData")
const { getDashboardData } = require("../controllers/dashboard")
const { UserEntryForm } = require("../controllers/UserEntryForm")
const { download } = require("../controllers/download")
const { getReportData } = require("../controllers/report")

const router = express.Router()

router.route('/login').post(login);
router.route('/treeData').get(getTreeData);
router.route('/dashboard').post(getDashboardData)
router.route('/UserEntryForm').post(UserEntryForm)
router.route('/download').post(download);
router.route('/report/:city').post(getReportData)



module.exports = router