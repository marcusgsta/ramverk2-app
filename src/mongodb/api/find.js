//mongodb

let Api = require('@marcusgsta/mongodb-api');
let api = new Api(process.env.DBWEBB_DSN || "mongodb://localhost:27017/app");

var express = require('express');
var router = express.Router();

/* GET mongodb page. */

router.get("/", async (request, response) => {
    try {
        // console.log("id:", request.params.id);
        // response.send("id is set to " + request.params.id);
        // if (request.params.id) {
        //     criteria = request.params.id;
        // }

        let res = await api.findInCollection("users", {}, {}, 0);

        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


module.exports = router;
