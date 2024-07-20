const express = require("express")
const { login } = require("../controllers/login")
const { getTreeData } = require("../controllers/treeData")
const { getDashboardData } = require("../controllers/dashboard")
const { UserEntryForm, validate } = require("../controllers/UserEntryForm")
const { download } = require("../controllers/download")
const { getReportDataTime, getReportDataDate } = require("../controllers/report")

const { AdminPanel } = require("../controllers/adminpanel")

const router = express.Router()

router.route('/login').post(login);
router.route('/treeData').get(getTreeData);
router.route('/dashboard').post(getDashboardData)
router.route('/UserEntryForm').post(UserEntryForm)
router.route('/download').post(download);
router.route('/validate/:id').get(validate)


router.route('/AdminPanel').post(AdminPanel)

router.route('/report/:city').post(getReportDataTime);
router.route('/report/:start/:end').post(getReportDataDate);



module.exports = router