"use strict";
//mongodb
// const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/app");

var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.delete("/", async (request, response) => {
    try {
        var id = request.body.id;
        let res = await api.removeFromCollection("users", id);

        console.log("id", id);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});



module.exports = router;
