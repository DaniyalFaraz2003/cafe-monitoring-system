const db = require("../db/config");

// SQL QUERY ERROR : Handle getting values from frontend/UserEntryForm.js, entered by user and then apply INSERT INTO query accordingly

const validate = async (req, res) => {
    const empId = req.params.id;
    try {
        // Check if the user has already registered a meal for today
        const [existingRecords] = await db.query('SELECT * FROM meal_record WHERE Emp_ID = ? AND meal_date = CURRENT_DATE();', [Emp_ID]);
        if (existingRecords.length > 0) {
            // Meal already registered for today
            return res.json({
                message: "meal_already_registered"
            });
        }

        // If no meal registered for today, proceed to insert the new meal record
        const [records] = await db.query('INSERT INTO meal_record (Emp_ID, meal_pref, city, meal_date) VALUES (?, ?, ?, CURRENT_DATE());', [Emp_ID, meal_pref, city]);
        res.json({
            message: "ok"
        });

    } catch (error) {
        res.json({
            message: "fail"
        });
        console.log(error);
    }
};
const UserEntryForm = async (req, res) => {
    const { Emp_ID, meal_pref, city } = req.body

    try {
        // query the database to insert the values entered by the user
        const [records] = await db.query('INSERT INTO meal_record (Emp_ID, meal_pref, city) VALUES ( ?, ?, ?);', [Emp_ID, meal_pref, city])
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
    UserEntryForm, validate
}