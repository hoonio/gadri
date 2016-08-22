var express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https');

var app = express();
app.set('port', process.env.PORT || 8080);
app.use(express.static(__dirname + '/gadri/'));

app.get('/*', function(request, response) {
  var data = fs.readFileSync('gadri/index.html').toString();
  response.send(data);
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});
