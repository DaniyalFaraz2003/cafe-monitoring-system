const db = require("../db/config")

const getReportData = async (req, res) => {
    const city = req.params.city;
    const { timeFrame } = req.body;
    const timeMap = {
        daily: "meal_date = CURRENT_DATE()",
        weekly: "week(meal_date) = week(now())",
        monthly: "month(meal_date) = month(current_date())"
    }
    const query = `
    SELECT e.Emp_ID as id, e.Emp_Name as name, e.Designation as designation, e.Dept as department, e.City as city, e.Age as age, m.meal_pref as mealtype, m.meal_time as mealtime, m.meal_date as mealdate
    FROM meal_record m
    INNER JOIN Employee e
    ON m.Emp_ID = e.Emp_ID
    AND m.city = 'Islamabad'
    and meal_date = '2024-07-18';
    `;
    res.send(city + " " + timeFrame);
}

module.exports = {
    getReportData
}