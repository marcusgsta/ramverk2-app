/**
 * Broadcast server using websockets and express.
 */
"use strict";

var express = require('express');
var router = express.Router();
let passport = require("passport");

/* GET chat page. */

router.get("/", passport.authenticate(
    'jwt', { session: false }), async (req, res) => {
    res.render("chat", {
        title: "Realtidschatt",
        message: "En chat-server i Express.js"
    });
});

module.exports = router;
