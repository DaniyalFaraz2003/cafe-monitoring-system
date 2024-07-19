const db = require("../db/config");

const queries = {
    daily: "SELECT meal_pref, COUNT(*) AS count FROM meal_record WHERE city = ? AND meal_date = CURRENT_DATE() GROUP BY meal_pref;",
    weekly: "SELECT meal_pref, COUNT(*) AS count FROM meal_record WHERE city = ? AND WEEK(meal_date) = WEEK(NOW()) GROUP BY meal_pref;",
    monthly: "SELECT meal_pref, COUNT(*) AS count FROM meal_record WHERE city = ? AND MONTH(meal_date) = MONTH(CURRENT_DATE()) GROUP BY meal_pref;",
    daily_1: "SELECT meal_pref, COUNT(*) AS count FROM meal_record WHERE city = ? AND meal_date = CURRENT_DATE() - 1 GROUP BY meal_pref;",
    weekly_1: "SELECT meal_pref, COUNT(*) AS count FROM meal_record WHERE city = ? AND WEEK(meal_date) = WEEK(NOW()) - 1 GROUP BY meal_pref;",
    monthly_1: "SELECT meal_pref, COUNT(*) AS count FROM meal_record WHERE city = ? AND MONTH(meal_date) = MONTH(CURRENT_DATE()) - 1 GROUP BY meal_pref;",
    userToday: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? AND meal_date = CURRENT_DATE();",
    userWeek: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? AND WEEK(meal_date) = WEEK(NOW());",
    userMonth: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? AND MONTH(meal_date) = MONTH(CURRENT_DATE());",
    userToday_1: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? AND meal_date = CURRENT_DATE() - 1;",
    userWeek_1: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? AND WEEK(meal_date) = WEEK(NOW()) - 1;",
    userMonth_1: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? AND MONTH(meal_date) = MONTH(CURRENT_DATE()) - 1;",
    barToday: "SELECT meal_pref, meal_time FROM meal_record WHERE city = ? AND meal_date = CURRENT_DATE();",
    barWeek: "SELECT meal_pref, meal_time FROM meal_record WHERE city = ? AND WEEK(meal_date) = WEEK(NOW());",
    barMonth: "SELECT meal_pref, meal_time FROM meal_record WHERE city = ? AND MONTH(meal_date) = MONTH(CURRENT_DATE());"
};

const getDashboardData = async (req, res) => {
    const { city, time } = req.body;
    let userTime, barTime;
    switch (time) {
        case "daily":
            userTime = "userToday";
            barTime = "barToday";
            break;
        case "weekly":
            userTime = "userWeek";
            barTime = "barWeek";
            break;
        case "monthly":
            userTime = "userMonth";
            barTime = "barMonth";
            break;
        default:
            break;
    }
    try {
        const [normal, diet] = await db.query(queries[`${time}`], [city]);
        const [normal_1, diet_1] = await db.query(queries[`${time}_1`], [city]);
        const [user] = await db.query(queries[`${userTime}`], [city]);
        const [user_1] = await db.query(queries[`${userTime}_1`], [city]);
        const [bar] = await db.query(queries[`${barTime}`], [city]);

        // Organize bar chart data
        const barData = bar.reduce((acc, { meal_pref, meal_time }) => {
            if (!acc[meal_time]) {
                acc[meal_time] = { Normal: 0, Diet: 0 };
            }
            acc[meal_time][meal_pref]++;
            return acc;
        }, {});

        const barChartData = Object.keys(barData).map(time => ({
            meal_time: time,
            Normal: barData[time].Normal,
            Diet: barData[time].Diet
        }));

        return res.json({
            normal: normal.reduce((acc, { count }) => acc + count, 0),
            diet: diet.reduce((acc, { count }) => acc + count, 0),
            normal_1: normal_1.reduce((acc, { count }) => acc + count, 0),
            diet_1: diet_1.reduce((acc, { count }) => acc + count, 0),
            user: user[0]['UniqueEmployeesServed'],
            user_1: user_1[0]['UniqueEmployeesServed'],
            bar: barChartData
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error fetching dashboard data");
    }
};

module.exports = {
    getDashboardData
};
