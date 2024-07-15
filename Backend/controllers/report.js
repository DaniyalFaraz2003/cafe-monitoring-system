const db = require("../db/config"); // Assuming you have a db.js file to manage your database connection

const report = async (req, res) => {
  const query = `
        SELECT m.Emp_ID, e.Emp_Name, m.meal_pref, m.meal_time, m.meal_date, m.city
FROM meal_record m
JOIN Employee e ON m.Emp_ID = e.Emp_ID;
    `;
  try {
    const results = await db.query(query);
    res.json(results);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  report,
};