import {store} from "tiny-blog-db";

let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    const db = store(process.env.MONGODB_HOST, process.env.MONGODB_PORT);
    db.Tag.view.all().fork(
        console.error,
        tags => {
            res.send(tags)
        }
    );
});

module.exports = router;