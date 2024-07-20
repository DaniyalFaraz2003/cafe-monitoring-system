const db = require("../db/config");

// SQL QUERY ERROR : Handle getting values from frontend/UserEntryForm.js, entered by user and then apply INSERT INTO query accordingly

const validate = async (req, res) => {
    const empId = req.params.id;
    try {
        // query the database to insert the values entered by the user
        const [records] = await db.query('SELECT * FROM employee WHERE emp_id=?', [empId]);
        if (records.length > 0) {
            // send the city of the user as a response
            res.json({
                message: "ok",
                pref: records[0].preference
            });
        }
        else {
            res.json({
                message: "fail"
            })
        }

    } catch (error) {
        res.json({
            message: "fail"
        })
        console.log(error)
    }
}

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