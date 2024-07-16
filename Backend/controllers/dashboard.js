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
    userMonth_1: "SELECT COUNT(DISTINCT Emp_ID) AS UniqueEmployeesServed FROM meal_record WHERE city = ? and month(meal_date) = month(current_date()) - 1;"
}

// pie_chart posting data correcting, similarly do for other graphs
const pie_chart = async (req, res) => {
    const { city, time } = req.body;
    let userTime;
    switch (time) {
        case "daily":
            userTime = "userToday"
            break;
        case "weekly":
            userTime = "userWeek"
            break;
        case "monthly":
            userTime = "userMonth"
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
        return res.json({ 
            normal: normal[0]['COUNT(*)'], diet: diet[0]['COUNT(*)'],
            normal_1: normal_1[0]['COUNT(*)'], diet_1: diet_1[0]['COUNT(*)'],
            user: user[0]['UniqueEmployeesServed'], user_1: user_1[0]['UniqueEmployeesServed']
        });
        
    } catch (error) {
        console.log(error);
    }
}

// write your own respective query
// const bar_graph = async (req, res) => {
//     const { normal, diet } = req.body;
//     try {
//         const [record1] = await db.query('');
//         const [record2] = await db.query('');
        
//         if () {
//             res.json({  });
//             console.log('Query executed successfully');
//         } else {
//             res.status(404).json({ "No records found" });
//             console.log('No records found');
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// }

module.exports = {
    pie_chart
};
