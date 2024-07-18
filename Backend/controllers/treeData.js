const db = require("../db/config")

const getTreeData = async (req, res) => {
    try {
        const [result] = await db.query(`
            SELECT e.Emp_ID as id, e.Emp_Name as name, e.Designation as designation, e.Dept as department, e.City as city, e.Age as age
            FROM employee e
        `)
        res.json(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getTreeData
}