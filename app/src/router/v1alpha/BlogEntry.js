let express = require('express');
let router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/byTag', function(req, res) {
    res.send('byTag');
});

router.get('/newest', function(req, res) {
    res.send('newest');
});

module.exports = router;