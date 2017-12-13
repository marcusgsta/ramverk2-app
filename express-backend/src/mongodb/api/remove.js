"use strict";
//mongodb
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.delete("/", async (request, response) => {
    const Model = require("../model");
    let model = new Model();

    try {
        var id = request.body.id;
        let res = await model.removeFromCollection(dsn, "formulas", id);

        console.log("id", id);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});



module.exports = router;
