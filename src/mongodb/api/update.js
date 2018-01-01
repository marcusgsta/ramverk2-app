"use strict";
//mongodb
// const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";
let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/app");
const Functions = require('../../functions');
var express = require('express');
var router = express.Router();
let bcrypt = require('bcrypt');

/* POST mongodb page. */

router.put("/", async (request, response) => {
    try {
        var id = request.body.id;
        var name = request.body.name;
        var nick = request.body.nick;
        var email = request.body.email;
        let password = request.body.password || 'not';
        let hashPassword = bcrypt.hashSync(password, 10);
        let gravatar = Functions.makeGravatar(email);
        let resObject = {
            "name": name,
            "nick": nick,
            "email": email,
            "password": hashPassword,
            "gravatar": gravatar
        };
        let res = await api.updateItemFromCollection("users", id, resObject);

        console.log("id", id);
        console.log("name", name);
        console.log("nick", nick);
        console.log("email", email);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


module.exports = router;
