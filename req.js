var request = require('request');
request.get('127.0.0.1:8080/update', function (error, response, body) {
    if (error) Log.write(error);
    Log.write('send report to channel ' , new Date())
})