/**
 * Connect to the database and setup it with some default data.
 */
"use strict";
let bcrypt = require('bcrypt');

let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/app");

const fs = require("fs");
const path = require("path");
const docs = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "setup.json"),
    "utf8"
));

let newDocs = docs.map((value) => {
    value.password = bcrypt.hashSync(value.password, 10);
    return value;
});

console.log(newDocs);
let colName = "users";

// Do it.
api.resetCollection(colName, newDocs)
    .catch(err => console.log(err));
