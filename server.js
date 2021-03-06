var express = require('express');
var app = express();
var request = require('request');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/getBooksList/:searchTerm/:apiKey', function(req, res){
  request({
      method: 'GET',
      uri: `https://www.goodreads.com/search/index.xml?q=${req.params.searchTerm}&key=${req.params.apiKey}&search[field]=title`
    }, function (error, response, body){
      if(!error && response.statusCode == 200){
        res.send(body);
      }
   })
});

app.get('/api/getBookDetail/:bookId/:apiKey', function(req, res){
    request({
        method: 'GET',
        uri: `https://www.goodreads.com/book/show?format=xml&key=${req.params.apiKey}&id=${req.params.bookId}`
      }, function (error, response, body){
        if(!error && response.statusCode == 200){
          res.send(body);
        }
     })
  });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});