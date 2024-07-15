const db = require("../db/config")

const login = async (req, res) => {
    // the username and password are sent in the request body
    const { username, password } = req.body;
    try {
        const [records] = await db.query("SELECT * FROM admin_info WHERE user_id=? AND admin_password=?", [username, password]);
        if (records.length > 0) {
            res.json({
                message: "ok",
                city: records[0].city
            });
        }
        else {
            res.json({
                message: "fail"
            })
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    login
}