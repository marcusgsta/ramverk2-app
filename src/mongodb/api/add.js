"use strict";
//mongodb
// const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";
let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/math");


var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.post("/", async (request, response) => {
    // const Model = require("../model");
    // let model = new Model();

    try {
        var name = request.body.name;
        var formula = request.body.formula;
        var description = request.body.description;

        let resObject = {
            "name": name,
            "formula": formula,
            "description": description
        };
        let colName = "formulas";
        let res = await api.addToCollection(colName, resObject);

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
