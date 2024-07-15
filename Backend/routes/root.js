const express = require("express")
const { login } = require("../controllers/login")
const { getTreeData } = require("../controllers/treeData")

const router = express.Router()


router.route('/login').post(login);
router.route('/treeData/:city').get(getTreeData);
router.route('/userentry').

module.exports = router