const db = require("../db/config");
const path = require('path');
const fs = require('fs');

// 

const Upload = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '..', 'downloads', req.file.filename);
        console.log(`File saved at ${filePath}`);

        // Here you can process the file as needed

        res.status(200).json({
            message: 'File uploaded successfully'
        });
    } catch (error) {
        console.error('Error uploading file', error);
        res.status(500).json({
            message: 'Error uploading file',
            error: error.message,
        });
    }
}

const Feedback = async (req, res) => {
    const { Emp_ID, description, rating } = req.body

    try {
        // query the database to insert the feedback values entered by the user
        const [records] = await db.query('INSERT INTO feedback (Emp_ID, description, rating) VALUES (?, ?, ?);', [Emp_ID, description, rating]);
        res.json({
            message: "ok"
        });

    } catch (error) {
        res.json({
            message: "fail"
        })
        console.log(error)
    }
}

module.exports = {
    Feedback, Upload
}
