const db = require("../db/config");

// SQL QUERY ERROR : Handle getting values from frontend/UserEntryForm.js, entered by user and then apply INSERT INTO query accordingly

const UserEntryForm = async (req, res) => {
    const {Emp_ID, meal_pref, city} = req.body

    try {
        const [records] = await db.query('INSERT INTO meal_record (Emp_ID, meal_pref, city) VALUES ( ?, ?, ?);', [Emp_ID, meal_pref, city])

        if (records.length > 0) {
            res.json({ message: "ok", Emp_ID: records[0].Emp_ID });
            console.log('Query executed successfully');
        } else {
            res.status(404).json({message: "No records found" });
            console.log('fail(No records found)');
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    UserEntryForm
}