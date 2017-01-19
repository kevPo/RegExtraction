var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var controllers = require('./controllers');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));

controllers.init(app);

app.use(express.static('public'));

var port = process.env.PORT || 8080;
app.listen(port);
console.log(`App listening on port ${port}`);