"use strict";
//mongodb

var express = require('express');
var router = express.Router();

router.get("/",
    function(req, res, next) {
        console.log(req.get('Authorization'));
        next();
    }, function(req, res) {
        res.json("debugging");
    });

module.exports = router;
