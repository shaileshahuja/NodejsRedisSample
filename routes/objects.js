/**
 * Created by shaileshahuja on 17/3/17.
 */

var express = require('express');

module.exports = function (db) {
    var router = express.Router();

    router.get('/:key', function (req, res) {
        var timestamp = null;
        if(req.query.timestamp) {
            var isValid = new Date(parseInt(req.query.timestamp)).getTime() > 0;
            if(isValid) {
                timestamp = parseInt(req.query.timestamp);
            }
            else {
                res.status(400);
                res.json({message: "Invalid timestamp"});
                return;
            }
        }
        else {
            timestamp = Date.now();
        }
        db.zrevrangebyscore(req.params.key, timestamp, 0, 'LIMIT', 0, 1, function (err, reply) {
            if(err) {
                res.status(500);
                res.json({message: "Something went wrong."})
            }
            else if(reply.length !== 1) {
                res.status(400);
                res.json({message: "Key didn't exist"});
            }
            else {
                res.send(reply[0].substring(reply[0].indexOf(':')+1));
            }
        });
    });

    router.post('/', function (req, res) {
        var data = req.body; //Get the parsed information
        var keys = Object.keys(data);
        if(keys.length !== 1){
            res.status(400);
            res.json({message: keys.length + " keys were sent, exactly 1 is allowed"});
            return;
        }
        var timestamp = Date.now();
        db.zadd(keys[0], timestamp, timestamp + ':' + data[keys[0]], function (err) {
            if(err) {
                res.status(500);
                res.json({message: "Something went wrong."})
            }
            else {
                res.json({message: "OK"});
            }
        });
    });

    return router;
};