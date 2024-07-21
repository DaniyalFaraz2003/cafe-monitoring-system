const db = require("../db/config");

const Feedback = async (req, res) => {
    const { Emp_ID, description, rating } = req.body

    try {
        // query the database to insert the values entered by the user
        const [records] = await db.query('INSERT INTO feedback (Emp_ID, description, rating) VALUES ( ?, ?, ?);', [, , ])
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
    Feedback
}