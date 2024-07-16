const db = require("../db/config");


const queries = {
    daily: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and meal_date = CURRENT_DATE();",
    weekly: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and week(meal_date) = week(now());",
    monthly: "SELECT COUNT(*) FROM meal_record WHERE meal_pref = ? and city = ? and month(meal_date) = month(current_date());",
    userToday: "",
    userWeek: "",
    userMonth: ""
}

// pie_chart posting data correcting, similarly do for other graphs
const pie_chart = async (req, res) => {
    const { city, time } = req.body;
    try {
        const [record1] = await db.query(queries[`${time}`], ["Normal", city]);
        const [record2] = await db.query(queries[`${time}`], ["Diet", city]);
        return res.json({ normal: record1[0]['COUNT(*)'], diet: record2[0]['COUNT(*)'] });
        
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
