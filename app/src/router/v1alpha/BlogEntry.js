import express from "express";
import * as R from "ramda";
import * as DB from "../../db"
import * as Future from "fluture";

let router = express.Router();
const version = "v1alpha";

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

router.get('/byTag', function(req, res) {
    res.send('byTag');
});

router.get('/newest', function(req, res) {
    DB.getVersion(version)
        .chain(db => Future.Future(
            (reject, resolve) =>  {
                db.collection("BlogEntry")
                    .find()
                    .sort({ date: 1 })
                    .skip(req.query.offset)
                    .limit(req.query.limit)
                    .toArray((err, results) => {
                        if (R.isNil(err)) resolve(results);
                        else reject(err);
                    })
                }
            )
        ).fork(
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