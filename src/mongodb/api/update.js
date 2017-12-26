"use strict";
//mongodb
// const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";
let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/app");

var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.put("/", async (request, response) => {
    try {
        var id = request.body.id;
        var name = request.body.name;
        var nick = request.body.nick;
        var gravatar = request.body.gravatar;
        let resObject = {
            "name": name,
            "nick": nick,
            "gravatar": gravatar
        };
        let res = await api.updateItemFromCollection("users", id, resObject);

        console.log("id", id);
        console.log("name", name);
        console.log("nick", nick);
        console.log("grav", gravatar);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


module.exports = router;
