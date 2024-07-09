const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "daniyalmysql",
    database: "none"
})

module.exports = mysqlPool;