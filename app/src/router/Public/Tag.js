import {store} from "tiny-blog-db";

let express = require('express');
let router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    const db = store("localhost", 27017);
    db.Tag.view.all().fork(
        console.error,
        tags => {
            res.send(tags)
        }
    );
});


module.exports = router;