const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "kyasekya90",
    database: "mycafe_project",
})

module.exports = mysqlPool;