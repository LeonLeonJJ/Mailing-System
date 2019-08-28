

var express = require('express');
var app = express();



app.get('/', function(req, res) {
  res.send("inseart a custom email address in the box below");
});

app.post('/submit-data', function(req, res) {
  res.send('POST Request');
});

app.put('/update-data', function(req, res) {
  res.send('PUT Request');
});

app.delete('/delete-data', function(req, res) {
  res.send('DELETE Request');
});

var server = app.listen(5000, function(){
  console.log('Node server is running...');
});
