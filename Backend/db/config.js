const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "kyasekya90",
    database: "CAFEE",
})

module.exports = mysqlPool;