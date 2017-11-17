var express = require('express');
var router = express.Router();

/* GET about page. */

router.get("/", (req, res) => {
    res.render("about", {
        title: "Om",
        message: "Om den här sidan"
    });
});

module.exports = router;
