/**
 * Created by Ran on 05-Dec-15.
 */
var Credential = require('../../models/credential');

function validateRequiredParams(input, requiredParams) {

    // Traverse required fields
    for (var i in requiredParams) {
        // Get current field
        var field = requiredParams[i];

        // Is it empty?
        if (!input[field]) {
            this.throw(400, "Please provide the " + field + ".");
        }
    }
}
module.exports = function *() {

    // Parse input from request body
    var input = this.request.body;

    // Required fields
    var required = ['domain', 'username', 'password', 'notes', 'active'];

    validateRequiredParams.call(this, input, required);

    var newCredential = new Credential();
    newCredential.domain = input.domain;
    newCredential.username = input.username;
    newCredential.password = input.password;
    newCredential.notes = input.notes;
    newCredential.active = input.active;
    newCredential.creationTime = new Date().getTime();

    yield newCredential.save();

    // Return success
    this.body = { success: true };
};