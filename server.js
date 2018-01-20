var express = require('express');
var app = express();

var port = 3001;
app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server Started' + port);


//create API, it takes two args, 1st is API name and 2nd is callback function with request and response agrs.
app.post('/api/login', function(req, res) {

  var resultObj = [{
    title: 'java',
    instrctor: 'Name1',
    level: 'A'
  }, {
    title: 'javaScript',
    instrctor: 'Name2',
    level: 'B+'
  }, {
    title: 'HTML',
    instrctor: 'Name3',
    level: 'A++'
  }];

  res.json(resultObj);

});
