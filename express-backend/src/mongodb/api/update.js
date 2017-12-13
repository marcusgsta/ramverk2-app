"use strict";
//mongodb
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.put("/", async (request, response) => {
    let Model = require("../model");
    const model = new Model();

    try {
        var id = request.body.id;
        var name = request.body.name;
        var formula = request.body.formula;
        var description = request.body.description;
        let res = await model.updateItemFromCollection(
            dsn, "formulas", id, name, formula, description);

        console.log("id", id);
        console.log("name", name);
        console.log("formula", formula);
        console.log("description", description);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


module.exports = router;
