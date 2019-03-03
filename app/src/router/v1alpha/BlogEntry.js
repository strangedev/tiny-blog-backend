import express from "express";
import * as R from "ramda";
import {v1alpha} from "tiny-blog-model";

let router = express.Router();

// inject default value for query.limit, query.offset
router.use(function limitAndOffsetDefaults(req, res, next) {
    if (R.isNil(req.query.limit)) {
        req.query.limit = 50;
    }
    if (R.isNil(req.query.offset)) {
        req.query.offset = 0;
    }
    next();
});

router.use(express.json());

router.get('/byTag', function(req, res) {
    res.send("Not Implemented!");
});

router.get('/newest', function(req, res) {
    const store = v1alpha.store("localhost", 27017);
    store.BlogEntry.view.newest(req.query.offset, req.query.limit).fork(
            console.error,
            results => {
                console.log(results);
                res.format({
                    json: () => res.send(JSON.stringify(results))
                });
            }
        );
});

module.exports = router;