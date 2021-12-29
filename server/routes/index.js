var express = require("express");
var cors = require("cors");
var router = express.Router();

var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "tylerdouglas.co" });
});

router.get("/api", cors(corsOptions), (req, res) => {
    res.json({ message: "Hello from server!" });
});

module.exports = router;
