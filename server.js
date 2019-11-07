// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express application and port.env
var app = express();
var PORT = process.env.PORT || 8080;

//  access to CSS files


// Add middleware parsing incoming request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static('./app/public'));
// Adding the api and html routes
require( './app/routing/apiroutes')(app);
require('./app/routing/htmlRoutes')(app);
// console.log(__dirname);

// Start listening on PORT
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});