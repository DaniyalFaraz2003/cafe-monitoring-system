const db = require("../db/config");

// SQL QUERY ERROR : Handle getting values from frontend/UserEntryForm.js, entered by user and then apply INSERT INTO query accordingly

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
    UserEntryForm
}