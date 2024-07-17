const db = require("../db/config")

const getTreeData = async (req, res) => {
    const city = req.params['city']
    try {
        const [result] = await db.query(`
<<<<<<< HEAD
            SELECT m.Emp_ID as id, e.Emp_Name as name, e.Designation as designation, e.Dept as department, m.City as city, e.Age as age, m.meal_pref as mealtype, m.meal_time as mealtime, m.meal_date as mealdate
=======
            SELECT e.Emp_ID as id, e.Emp_Name as name, e.Designation as designation, e.Dept as department, e.City as city, e.Age as age, m.meal_pref as mealtype, m.meal_time as mealtime, m.meal_date as mealdate
>>>>>>> c8ecd345fee4cbfd13ed2626a6aac8dfeedb0284
            FROM meal_record m
            RIGHT OUTER JOIN Employee e
            ON m.Emp_ID = e.Emp_ID
            AND m.city = ?;
        `, [city, ])
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTreeData
}