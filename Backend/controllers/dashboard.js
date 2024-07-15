const db = require("../db/config");

// pie_chart posting data correcting, similarly do for other graphs
const pie_chart = async (req, res) => {
    const { normal, diet } = req.body;
    try {
        const [record1] = await db.query('SELECT COUNT(meal_pref) AS count FROM meal_record WHERE meal_pref = "Normal";');
        const [record2] = await db.query('SELECT COUNT(meal_pref) AS count FROM meal_record WHERE meal_pref = "Diet";');
        
        if (record1[0].count > 0 && record2[0].count > 0) {
            res.json({ normal: record1[0].count, diet: record2[0].count });
            console.log('Query executed successfully');
        } else {
            res.status(404).json({ message: "No records found" });
            console.log('No records found');
        }
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
