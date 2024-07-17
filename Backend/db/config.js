const mysql = require("mysql2/promise")

const mysqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
<<<<<<< HEAD
    password: "Pakistan12345",
    database: "cafe_project",
=======
    password: "daniyalmysql",
    database: "cafe_project"
>>>>>>> c8ecd345fee4cbfd13ed2626a6aac8dfeedb0284
})

module.exports = mysqlPool;