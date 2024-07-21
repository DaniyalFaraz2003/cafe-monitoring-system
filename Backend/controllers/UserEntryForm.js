const db = require("../db/config");

// SQL QUERY ERROR : Handle getting values from frontend/UserEntryForm.js, entered by user and then apply INSERT INTO query accordingly

const validate = async (req, res) => {
    const Emp_ID = req.params.id;
    try {
        // If no meal registered for today, proceed to insert the new meal record
        const [records] = await db.query('SELECT * FROM employee WHERE Emp_ID = ?', [Emp_ID]);
        if (records.length > 0) {
            res.json({
                message: "ok",
                pref: records[0].preference
            })
        }
        else {
            res.json({
                message: "fail"
            })
        }

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
        // Check if the user has already registered a meal for today
        const [existingRecords] = await db.query('SELECT * FROM meal_record WHERE Emp_ID = ? AND meal_date = CURRENT_DATE();', [Emp_ID]);
        if (existingRecords.length > 0) {
            // Meal already registered for today
            return res.json({
                message: "meal_already_registered"
            });
        }

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