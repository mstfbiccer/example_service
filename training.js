var express = require('express');
var app = express();
app.get('/api/test', function (req, res) {
    res.end("HELLO WORLD!");
});
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

})