var express = require('express');
var app = express();
app.get('/api/test', function (req, res) {
    res.end("HELLO WORLD!");
});