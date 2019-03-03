import express from "express";
import * as R from "ramda";
import * as DB from "../../db"

let router = express.Router();
const version = "v1alpha";

// inject default value for query.limit, query.offset
router.use(function limitAndOffsetDefaults(req, res, next) {
    if (R.isNil(req.query.limit)) {
        req.query.limit = 50;
    }
    if (R.isNil(req.query.offset)) {
        req.query.limit = 0;
    }
    next();
});

router.get('/byTag', function(req, res) {
    res.send('byTag');
});

router.get('/newest', function(req, res) {
    DB.getVersion(version)
        .fork(
            console.error,
            db => {
                res.send(
                    JSON.stringify(
                        R.map(
                            x => x.marshal(),
                            db.BlogEntry
                                .find()
                                .sort({ date: 1 })
                                .skip(req.query.offset)
                                .limit(req.query.limit)

                        )
                    )
                )
            }
        );
});

module.exports = router;