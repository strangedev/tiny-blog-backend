import express from "express";
import * as R from "ramda";
import {store} from "tiny-blog-db";

let router = express.Router();

// inject default value for query.limit, query.offset
router.use(function limitAndOffsetDefaults(req, res, next) {
    if (R.isNil(req.query.limit)) {
        req.query.limit = 50;
    } else {
        req.query.limit = parseInt(req.query.limit);
    }
    if (R.isNil(req.query.offset)) {
        req.query.offset = 0;
    } else {
        req.query.offset = parseInt(req.query.offset);
    }
    next();
});

router.use(express.json());

router.post('/byTag', function(req, res) {
    const db = store("localhost", 27017);
    if (R.isNil(req.body.tags)) {
        res.sendStatus(400);
    } else {
        db.BlogEntry.view.byTag(
            req.body.tags,
            req.query.offset,
            req.query.limit
        ).map(
            R.partial(R.map, [blogEntry => blogEntry.marshal()])
        ).fork(
            console.error,
            results => {
                res.format({
                    json: () => res.send(results)
                });
            }
        );
    }
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