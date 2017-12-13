//mongodb
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

var express = require('express');
var router = express.Router();

/* GET mongodb page. */

router.get("/", async (request, response) => {
    const Model = require("../model");
    let model = new Model();

    try {
        let res = await model.findInCollection(dsn, "formulas", {}, {}, 0);

        console.log(res);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});



module.exports = router;
