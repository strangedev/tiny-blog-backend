let express = require('express');
let app = express();

let Tag = require('./router/v1alpha/Tag');
let BlogEntry = require('./router/v1alpha/BlogEntry');

app.use('/Tag', Tag);
app.use('/BlogEntry/', BlogEntry);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});