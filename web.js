var express = require('express');
var fs = require('fs');
//var k = fs.readFileSync('index.html','utf8');
var buffer = fs.readFileSync('index.html');
var k = buffer.toString(buffer);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(k);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
