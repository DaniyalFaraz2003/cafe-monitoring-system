const express = require("express")
const multer = require('multer');
const { login } = require("../controllers/login")
const { getTreeData } = require("../controllers/treeData")
const { getDashboardData } = require("../controllers/dashboard")
const { UserEntryForm, validate } = require("../controllers/UserEntryForm")
const { download } = require("../controllers/download")
const { getReportDataTime, getReportDataDate } = require("../controllers/report")

const { Feedback, Upload } = require("../controllers/AdminPanel")

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/../downloads/`);
    },
    filename: function (req, file, cb) {
        cb(null, `empData.xlsx`);
    },
});

const upload = multer({ storage: storage });

router.route('/login').post(login);
router.route('/treeData').get(getTreeData);
router.route('/dashboard').post(getDashboardData)
router.route('/UserEntryForm').post(UserEntryForm)
router.route('/download').post(download);
router.route('/validate/:id').get(validate)

router.route("/upload").post(upload.single('file'), Upload);
router.route('/Feedback').post(Feedback)

router.route('/report/:city').post(getReportDataTime);
router.route('/report/:start/:end').post(getReportDataDate);



module.exports = router