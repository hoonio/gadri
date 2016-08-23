var express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https');

var app = express();
app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/client/'));

app.get('/*', function(request, response) {
  var data = fs.readFileSync(__dirname + '/client/index.html').toString();
  response.send(data);
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});
