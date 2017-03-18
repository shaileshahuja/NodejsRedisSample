/**
 * Created by shaileshahuja on 18/3/17.
 */

var redis = require("redis");
var client = redis.createClient();

var env = process.env.NODE_ENV || 'production';

if ('test' == env) {
    client.select(1, function(err, res){
        if(err) {
            console.log("Error: " + err);
        }
    });
}
client.on("error", function (err) {
    console.log("Error: " + err);
});

module.exports = client;