/**
 * Created by shaileshahuja on 17/3/17.
 */

var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

var db = require('./config/db.js');
var objects = require('./routes/objects.js')(db);
app.use('/objects', objects);
app.use(function (error, req, res, next) {
    if (error instanceof SyntaxError) {
        res.status(400);
        res.json({message: "Invalid json syntax"});
    } else {
        next();
    }
});

app.get('*', function (req, res) {
    res.status(400);
    res.send('Sorry, this is an invalid URL.');
});

var server = app.listen(8081, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening at http://%s:%s", host, port)
});

module.exports = app;