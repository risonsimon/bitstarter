var express = require('express');
var fs = require('fs');
//var k = fs.readFileSync('index.html','utf8');
var buffer = fs.readFileSync('index.html');
var k = buffer.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(k);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
