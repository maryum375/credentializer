/**
 * Created by Ran on 04-Dec-15.
 */
var Credential = require('../../models/credential');

module.exports = function *() {
    var domain = this.params.domain;

    // Find credentials by domain
    var credentials = yield Credential.find ({domain: domain});

    this.body = {credentials: credentials};
};