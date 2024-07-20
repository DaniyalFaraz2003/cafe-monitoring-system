const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Pakistan12345",
    password: "kyasekya90",
    database: "cafe_project"
})

module.exports = mysqlPool;