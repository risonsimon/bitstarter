var express = require('express');

var index = fs.readFileSync('index.html');
var buf = new Buffer('index','utf-8');
var resp = buf.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
