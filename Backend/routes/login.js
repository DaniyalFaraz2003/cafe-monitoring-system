const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send('This is login page request');
})

module.exports = router;