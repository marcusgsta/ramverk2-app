/**
 * Connect to the database and setup it with some default data.
 */
"use strict";
const Model = require("./model");

const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

const fs = require("fs");
const path = require("path");
const docs = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "setup.json"),
    "utf8"
));


let model = new Model();

// Do it.
model.resetCollection(dsn, "formulas", docs)
    .catch(err => console.log(err));
