"use strict";
//mongodb
// const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";
let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/app");
let bcrypt = require('bcrypt');

var express = require('express');
var router = express.Router();

/* POST mongodb page. */

router.post("/", async (request, response) => {
    try {
        let name = request.body.name;
        let nick = request.body.nick;
        let gravatar = request.body.gravatar;
        let role;

        if (request.body.role) {
            role = request.body.role;
        } else {
            role = "user";
        }

        let password = request.body.password || 'not';
        let hashPassword = bcrypt.hashSync(password, 10);

        let resObject = {
            "name": name,
            "nick": nick,
            "gravatar": gravatar,
            "password": hashPassword,
            "role": role
        };
        let colName = "users";
        let res = await api.addToCollection(colName, resObject);

        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


module.exports = router;
