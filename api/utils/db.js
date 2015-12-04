/**
 * Created by Ran on 04-Dec-15.
 */
// Load Mongoose interface
var mongoose = require('mongoose');

// Load config file
var config = require('../../config');

var connection = mongoose.connect(config.db);

// Return connection
module.exports = mongoose;