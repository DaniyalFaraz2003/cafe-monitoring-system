const db = require("../db/config")

const pie_chart = async (req, res) => {
    const {normal, diet} = req.body
    try {
        const [record1] = await db.query('SELECT COUNT(meal_pref) FROM meal_record WHERE meal_pref = "Normal" ;', [normal]);
        const [record2] = await db.query('SELECT COUNT(meal_pref) FROM meal_record WHERE meal_pref = "Diet" ;', [diet]);
        if (record1.length > 0) {
            res.send("success");
            console.log('normal done')
        }
        else {
            res.send("failed")
            console.log('normal not done')
        }
        if (record2.length > 0) {
            res.send("success");
        }
        else {
            res.send("failed")
        }
    }
    catch(error) {
        console.log(error)
    }
}

module.exports = {
    pie_chart
}
