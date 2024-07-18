const db = require("../db/config")

const getReportDataTime = async (req, res) => {
    const city = req.params.city;
    const { timeFrame } = req.body;

    const timeMap = {
        daily: "meal_date = CURRENT_DATE()",
        weekly: "week(meal_date) = week(now()) AND year(meal_date) = year(now())",
        monthly: "month(meal_date) = month(current_date()) AND year(meal_date) = year(current_date())"
    };

    if (!timeMap[timeFrame]) {
        return res.status(400).json({ error: 'Invalid time frame' });
    }

    const query = `
    SELECT e.Emp_ID as id, e.Emp_Name as name, e.City as city, m.meal_pref as mealtype, m.meal_time as mealtime, m.meal_date as mealdate
    FROM meal_record m
    JOIN Employee e ON m.Emp_ID = e.Emp_ID
    WHERE m.City = ?
    AND ${timeMap[timeFrame]};
    `;


    try {
        const [record] = await db.query(query, [city]);
        res.json(record);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getReportDataDate = async (req, res) => {
    const start = req.params.start;
    const end = req.params.end;
    const { city } = req.body
    const query = `
    SELECT e.Emp_ID as id, e.Emp_Name as name, e.City as city, m.meal_pref as mealtype, m.meal_time as mealtime, m.meal_date as mealdate
    FROM meal_record m
    JOIN Employee e ON m.Emp_ID = e.Emp_ID
    WHERE m.City = ?
    AND meal_date BETWEEN ? AND ?;
    `;


    try {
        const [record] = await db.query(query, [city, start, end]);
        res.json(record);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getReportDataTime, getReportDataDate
}