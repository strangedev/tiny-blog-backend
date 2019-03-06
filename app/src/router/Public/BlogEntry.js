import express from "express";
import * as R from "ramda";
import {store} from "tiny-blog-db";

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
    res.send("Not implemented");
});

router.get('/newest', function(req, res) {
    const db = store("localhost", 27017);
    db.BlogEntry.view.newest(req.query.offset, req.query.limit)
        .map(
            entries => R.map(
                blogEntry => blogEntry.marshal(),
                entries
            )
        ).fork(
            console.error,
            results => {
                console.log(results);
                res.format({
                    json: () => res.send(results)
                });
            }
        );
});

module.exports = router;