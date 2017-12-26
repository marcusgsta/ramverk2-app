"use strict";
//mongodb

var express = require('express');
var router = express.Router();

let passport = require("passport");

/* secret mongodb page requiring autentication with passport. */

router.get("/", passport.authenticate(
    'jwt', { session: false }), async (request, response) => {
    response.json({message: "Success! You can not see this without a token"});
});

module.exports = router;
