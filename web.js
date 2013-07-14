var express = require('express');
var fs = require ('fs');
var htmlfile = "index2.html";
var buf = new Buffer(256);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  buf = fs.readFileSync(htmlfile).toString();
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
