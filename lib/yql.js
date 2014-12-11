
var request = require('request'),
    querystring = require('querystring');

module.exports = function (input, config, cb) {

    var q = {
        q: input.yqlquery,
        format: "json",
        diagnostics: input.diagnostics,
        callback: "",
        env: input.envURL
    };

    var url = "http://query.yahooapis.com/v1/public/yql?" + querystring.stringify(q);

    request(url, function (error, response, body) {

        if(error) {
            return cb(error);
        }

        if(response.statusCode !== 200) {
            return cb("Status code not 200", body);
        }

        var results = JSON.parse(body);
        cb(null, results);
    });


};
