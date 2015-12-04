/**
 * Created by Ran on 04-Dec-15.
 */
var db = require('../utils/db');

// Prepare schema
var schema = new db.Schema(
    {
        domain: String,
        username: String,
        password: String,
        notes: String,
        active: Boolean,
        creationTime: Date
    });

// Return model with schema linked to collection
module.exports = db.model('credencials', schema);