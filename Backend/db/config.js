const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
<<<<<<< HEAD
    password: "Pakistan12345",
    database: "cafe_project"
=======
    password: "kyasekya90",
    database: "mycafe_project",
>>>>>>> a24c1004447fd9c3cb5cb176c7a1e6036a0e1f85
})

module.exports = mysqlPool;