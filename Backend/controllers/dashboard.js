const db = require("../db/config");

const pie_chart = async (req, res) => {
    try {
        const [normalResult] = await db.query('SELECT COUNT(*) as count FROM meal_record WHERE meal_pref = "Normal";');
        const [dietResult] = await db.query('SELECT COUNT(*) as count FROM meal_record WHERE meal_pref = "Diet";');

        const normalCount = normalResult[0].count;
        const dietCount = dietResult[0].count;

        res.json({
            success: true,
            data: {
                normal: normalCount,
                diet: dietCount
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching the data'
        });
    }
};

module.exports = {
    pie_chart
};
