/**
 * Connect to the database and setup it with some default data.
 */
"use strict";
// const Model = require("./model");
let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/math");

// const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

const fs = require("fs");
const path = require("path");
const docs = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "setup.json"),
    "utf8"
));

// let model = new Model();
let colName = "formulas";

// Do it.
api.resetCollection(colName, docs)
    .catch(err => console.log(err));
