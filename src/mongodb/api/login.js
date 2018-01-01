"use strict";
//mongodb

let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/app");
let bcrypt = require('bcrypt');
var express = require('express');
var router = express.Router();
// const Functions = require('./functions');

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

        if (users.length !== 0) {
            console.log(users[0].password);
            let user = users[0];

            if (bcrypt.compareSync(password, user.password)) {
                let nick = user.nick;
                let role = 'user';
                let email = user.email;
                let gravatar = user.gravatar;

                if (user.role === 'admin') {
                    role = 'admin';
                }
                //create JSON web token (JWT)
                let payload = {
                    'id': user._id,
                    'role': role,
                    'gravatar': gravatar,
                    'email': email,
                    'nick': nick
                };
                let token = jwt.sign(payload, jwtOptions.secretOrKey);

                // let admin;
                //
                // if (nick === 'admin') {
                //     admin = 'yes';
                // } else {
                //     admin = 'no';
                // }
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
