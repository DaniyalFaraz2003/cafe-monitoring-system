const db = require("../db/config");
const path = require('path');
const xlsx = require('xlsx');


// 

const Upload = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '..', 'downloads', 'empData.xlsx');
        console.log(`File saved at ${filePath}`);

        // Here you can process the file as needed
        const workbook = xlsx.readFile(filePath);
        const sheetNames = workbook.SheetNames;

        const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);
        try {
            data.forEach(async (object) => {
                if (object.Emp_ID && object.Emp_Name && object.Designation && object.Department && object.Age && object.City && object.Preference && object.Company) {
                    const [record] = await db.query("INSERT INTO Employee (Emp_ID, Emp_Name, Designation, Dept, Age, City, Preference, Company) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [object.Emp_ID, object.Emp_Name, object.Designation, object.Department, object.Age, object.City, object.Preference, object.Company])
                }
            })
        } catch (error) {
            res.status(500).json({
                message: "fail"
            })
            console.log(error);
        }

        res.status(200).json({
            message: 'ok'
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

const getFeedback = async (req, res) => {
    const { date } = req.body;

    try {
        const [records] = await db.query(`
            select Emp_Name, employee.Emp_Id, designation, company, rating, description from employee
            inner join feedback on feedback.emp_id = employee.emp_id
            where feedback_date = ?;
        `, [date]);
        res.status(200).json({
            message: "ok",
            result: records
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "fail",
            result: []
        })
    }
}

module.exports = {
    Feedback, Upload, getFeedback
}
