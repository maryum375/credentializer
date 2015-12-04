/**
 * Created by Ran on 04-Dec-15.
 */
var koa = require('koa');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var logger= require('koa-logger');


var router = require('./api/router');
var error = require('./api/utils/error');

// Create koa app
var app = koa();

// Koa middleware
app.use(error());
app.use(logger());
app.use(bodyParser());

// Define routes
router(app);

// Serve public files if no routes match
app.use(serve('./public'));

// Define configurable port
var port = process.env.PORT || 3000;

// Listen for connections
app.listen(port);

// Log port
console.log('Server listening on port ' + port);