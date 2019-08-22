var express = require('express');
let path = require('path');

var PORT = 8080;

var app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use(express.static('.'))

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);