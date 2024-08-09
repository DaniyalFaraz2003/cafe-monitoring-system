const db = require("../db/config");


const queries = {
    daily: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and meal_date = CURRENT_DATE();",
    weekly: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and week(meal_date) = week(now());",
    monthly: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and month(meal_date) = month(current_date());",

    barToday: "SELECT Emp_ID, meal_time, meal_pref FROM meal_record WHERE city = ? and meal_date = CURRENT_DATE();",
    barWeek: "SELECT Emp_ID, meal_time, meal_pref FROM meal_record WHERE city = ? and WEEK(meal_date) = WEEK(NOW());",
    barMonth: "SELECT Emp_ID, meal_time, meal_pref FROM meal_record WHERE city = ? and month(meal_date) = month(CURRENT_DATE());",

    line: "SELECT Emp_ID, meal_date, meal_pref FROM meal_record WHERE city = ? and (month(meal_date) = month(CURRENT_DATE()) OR month(meal_date) = month(CURRENT_DATE()) - 1);"
}

// pie_chart posting data correcting, similarly do for other graphs
const getDashboardData = async (req, res) => {
    const { city, time } = req.body;
    let barTime;
    switch (time) {
        case "daily":
            barTime = "barToday";
            break;
        case "weekly":
            barTime = "barWeek"
            break;
        case "monthly":
            barTime = "barMonth"
            break;
        default:
            break;
    }
    try {
        const [normal] = await db.query(queries['daily'], ["Normal", city]);
        const [diet] = await db.query(queries['daily'], ["Diet", city]);
        const [pieDiet] = await db.query(queries[`${time}`], ["Diet", city]);
        const [pieNormal] = await db.query(queries[`${time}`], ["Normal", city]);
        const [bar] = await db.query(queries[`${barTime}`], [city]);
        const [line] = await db.query(queries['line'], [city]);

        return res.json({ 
            normal: normal[0]['COUNT(*)'], diet: diet[0]['COUNT(*)'],
            bar: bar, line: line, pieDiet: pieDiet[0]['COUNT(*)'], pieNormal: pieNormal[0]['COUNT(*)']
        });
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getDashboardData
};