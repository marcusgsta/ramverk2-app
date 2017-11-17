var express = require('express');
var router = express.Router();

/* GET report page. */

router.get("/", (req, res) => {
    res.render("report", {
        title: "Redovisningar"
    });
});

module.exports = router;
