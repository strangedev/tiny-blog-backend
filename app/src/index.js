let express = require('express');
let app = express();
let cors = require("cors");

let Tag = require('./router/Public/Tag');
let BlogEntry = require('./router/Public/BlogEntry');

app.use(cors());

app.use('/Tag', Tag);
app.use('/BlogEntry/', BlogEntry);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});