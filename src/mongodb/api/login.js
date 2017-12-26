"use strict";
//mongodb

let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/app");
let bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();

let jwt = require("jsonwebtoken");
let jwtOptions = {};

jwtOptions.secretOrKey = 'tasmanianDevil';

/* login mongodb page. */

router.post("/", async (request, response) => {
    try {
        let nick = request.body.nick;
        let password = request.body.password;

        let criteria = {
            "nick": nick};

        // database call
        let colName = "users";
        let users = await api.findInCollection(colName, criteria, {}, 0);

        console.log(users[0]);
        console.log(users.length);
        if (users.length !== 0) {
            console.log(users[0].password);
            let user = users[0];

            if (bcrypt.compareSync(password, users[0].password)) {
                //create JSON web token (JWT)
                let payload = {'id': user._id};
                let token = jwt.sign(payload, jwtOptions.secretOrKey);

                console.log("nick", nick);
                console.log("password", password);
                response.json({message: "ok", token: token});
                // response.json(user);
            }
        }
    } catch (err) {
        console.log(err);
        response.json("Login failed!", err);
    }
});


module.exports = router;
