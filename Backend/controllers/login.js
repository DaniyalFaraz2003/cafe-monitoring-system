const db = require("../db/config")

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const [records] = await db.query("SELECT * FROM admin_info WHERE user_id=? AND admin_password=?", [username, password]);
        if (records.length > 0) {
            res.send("Login success");
        }
        else {
            res.send("Login failed")
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    login
}