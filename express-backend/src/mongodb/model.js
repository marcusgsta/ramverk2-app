"use strict";

class Mongodb {
    constructor() {
        this.mongo = require("mongodb").MongoClient;
    }

    /**
     * Find documents in a collection by matching search criteria.
     *
     * @async
     *
     * @param {string} dsn        DSN to connect to database.
     * @param {string} colName    Name of collection.
     * @param {object} criteria   Search criteria.
     * @param {object} projection What to project in results.
     * @param {number} limit      Limit the number of documents to retrieve.
     *
     * @throws Error when database operation fails.
     *
     * @return {Promise<array>} The resultset as an array.
     */
    async findInCollection(dsn, colName, criteria, projection, limit) {
        const db  = await this.mongo.connect(dsn);
        const col = await db.collection(colName);
        const res = await col.find(criteria, projection).limit(limit).toArray();

        await db.close();

        return res;
    }

    /**
     * Add documents to a collection
     *
     * @async
     *
     * @param {string} dsn        DSN to connect to database.
     * @param {string} colName    Name of collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Void}
     */
    async addToCollection(dsn, colName, name, formula, description) {
        const db  = await this.mongo.connect(dsn);
        const col = await db.collection(colName);
        const res = await col.insert(
            { "name": name,
                "formula": formula,
                "description": description}
        );

        await db.close();

        return res;
    }

    /**
     * Delete documents to a collection
     *
     * @async
     *
     * @param {string} dsn        DSN to connect to database.
     * @param {string} colName    Name of collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Void}
     */
    async removeFromCollection(dsn, colName, id) {
        console.log("id", id);
        const ObjectId = require('mongodb').ObjectId;
        const db  = await this.mongo.connect(dsn);
        const col = await db.collection(colName);
        //const res = await col.remove({ _id: new ObjectId(id)});
        const res = await col.deleteOne({ _id: new ObjectId(id)});

        await db.close();

        return res;
    }

    /**
     * Delete documents to a collection
     *
     * @async
     *
     * @param {string} dsn        DSN to connect to database.
     * @param {string} colName    Name of collection.
     *
     * @throws Error when database operation fails.
     *
     * @return {Void}
     */
    async updateItemFromCollection(dsn, colName, id, name, formula, description) {
        const ObjectId = require('mongodb').ObjectId;
        const db  = await this.mongo.connect(dsn);
        const col = await db.collection(colName);

        var myquery = { _id: new ObjectId(id) };
        var newvalues = { name: name, formula: formula, description: description };
        const res = await col.update(myquery, { $set: newvalues } );

        await db.close();

        return res;
    }

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
    async resetCollection(dsn, colName, doc) {
        const db  = await this.mongo.connect(dsn);
        const col = await db.collection(colName);

        await col.deleteMany();
        await col.insertMany(doc);
        console.log("Database was reset and setup.");
        await db.close();
    }
}



module.exports = Mongodb;
