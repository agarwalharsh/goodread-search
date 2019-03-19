var express = require('express');
var app = express();
var request = require('request');
const bodyParser = require('body-parser');

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
    app.use(express.static('client/build'));

    // Handling React routing
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(3001, function() {
    console.log("Listening on port 3001");
});