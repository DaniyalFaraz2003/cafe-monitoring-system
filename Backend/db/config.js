const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "daniyalmysql",
    database: "cafe_project",
})

module.exports = mysqlPool;