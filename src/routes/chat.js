/**
 * Broadcast server using websockets and express.
 */
"use strict";

var express = require('express');
var router = express.Router();

/* GET about page. */

router.get("/", (req, res) => {
    res.render("chat", {
        title: "Realtidschatt",
        message: "En chat-server i Express.js"
    });
});

module.exports = router;
