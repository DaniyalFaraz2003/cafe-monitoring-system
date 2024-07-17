const db = require("../db/config")

const getTreeData = async (req, res) => {
    const city = req.params['city']
    try {
        const [result] = await db.query(`
            SELECT e.Emp_ID as id, e.Emp_Name as name, e.Designation as designation, e.Dept as department, e.City as city, e.Age as age, m.meal_pref as mealtype, m.meal_time as mealtime, m.meal_date as mealdate
            FROM meal_record m
            RIGHT OUTER JOIN Employee e
            ON m.Emp_ID = e.Emp_ID
            AND m.city = ?;
        `, [city, ])
        console.log(result);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTreeData
}