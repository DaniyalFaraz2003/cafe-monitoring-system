const db = require("../db/config");


const queries = {
    daily: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and meal_date = CURRENT_DATE();",
    weekly: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and week(meal_date) = week(now());",
    monthly: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and month(meal_date) = month(current_date());",

    daily_1: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and meal_date = CURRENT_DATE() - 1;",
    weekly_1: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and week(meal_date) = week(now()) - 1;",
    monthly_1: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and month(meal_date) = month(current_date()) - 1;",

    userToday: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? and meal_date = CURRENT_DATE();",
    userWeek: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? and week(meal_date) = week(now());",
    userMonth: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? and month(meal_date) = month(current_date());",
    
    userToday_1: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? and meal_date = CURRENT_DATE() - 1;",
    userWeek_1: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? and week(meal_date) = week(now()) - 1;",
    userMonth_1: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? and month(meal_date) = month(current_date()) - 1;",

    barToday: "SELECT Emp_ID, meal_time, meal_pref FROM meal_record WHERE city = ? and meal_date = CURRENT_DATE();",
    barWeek: "SELECT Emp_ID, meal_time, meal_pref FROM meal_record WHERE city = ? and WEEK(meal_date) = WEEK(NOW());",
    barMonth: "SELECT Emp_ID, meal_time, meal_pref FROM meal_record WHERE city = ? and month(meal_date) = month(CURRENT_DATE());",

    line: "SELECT Emp_ID, meal_date, meal_pref FROM meal_record WHERE city = ? and month(meal_date) = month(CURRENT_DATE());"
}

// pie_chart posting data correcting, similarly do for other graphs
const getDashboardData = async (req, res) => {
    const { city, time } = req.body;
    let userTime, barTime;
    switch (time) {
        case "daily":
            userTime = "userToday";
            barTime = "barToday";
            break;
        case "weekly":
            userTime = "userWeek"
            barTime = "barWeek"
            break;
        case "monthly":
            userTime = "userMonth"
            barTime = "barMonth"
            break;
        default:
            break;
    }
    try {
        const [normal] = await db.query(queries[`${time}`], ["Normal", city]);
        const [diet] = await db.query(queries[`${time}`], ["Diet", city]);
        const [normal_1] = await db.query(queries[`${time}_1`], ["Normal", city]);
        const [diet_1] = await db.query(queries[`${time}_1`], ["Diet", city]);
        const [user] = await db.query(queries[`${userTime}`], [city])
        const [user_1] = await db.query(queries[`${userTime}_1`], [city])
        const [bar] = await db.query(queries[`${barTime}`], [city]);
        const [line] = await db.query(queries['line'], [city]);
        return res.json({ 
            normal: normal[0]['COUNT(*)'], diet: diet[0]['COUNT(*)'],
            normal_1: normal_1[0]['COUNT(*)'], diet_1: diet_1[0]['COUNT(*)'],
            user: user[0]['UniqueEmployeesServed'], user_1: user_1[0]['UniqueEmployeesServed'],
            bar: bar, line: line
        });
        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getDashboardData
};
