/**
 * Connect to the database and setup it with some default data.
 */
"use strict";
//const Model = require("./model");

const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/math";

const fs = require("fs");
const path = require("path");
const docs = JSON.parse(fs.readFileSync(
    path.resolve(__dirname, "setup.json"),
    "utf8"
));


//let model = new Model();

// Do it.
resetCollection(dsn, "formulas", docs)
    .catch(err => console.log(err));



/**
 * Reset a collection by removing existing content and insert a default
 * set of documents.
 *
 * @async
 *
 * @param {string} dsn     DSN to connect to database.
 * @param {string} colName Name of collection.
 * @param {string} doc     Documents to be inserted into collection.
 *
 * @throws Error when database operation fails.
 *
 * @return {Promise<void>} Void
 */
async function resetCollection(dsn, colName, doc) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);

    console.log(colName);
    console.log(dsn);
    await col.insertOne({"name": "hej", "formula": "j", "description": "ya"});
    await col.deleteMany();
    await col.insertMany(doc);

    await db.close();
}
