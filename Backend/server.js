const express = require("express");
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
const db = require('./db/config')
const bodyParser = require("body-parser");
const router = require("./routes/root");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use(logger);
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/", router);

app.use("*", (req, res) => {
    res.status(404).send("Sorry the resource you want is not on the server");
});

app.use(errorHandler);

db.query("SELECT 1")
    .then(data => {
        console.log("DB connection successful");
        app.listen(PORT, () => {
            console.log(`Server running on PORT: ${PORT}`);
        });
    })
    .catch(err => console.log("DB connection failed. \n" + err))
