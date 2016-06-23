var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(4100, function() {
    console.log('Express server listening on port ' + 4100);
});