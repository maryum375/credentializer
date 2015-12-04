/**
 * Created by Ran on 04-Dec-15.
 */
var router = require('koa-router')();

module.exports = function (app)
{
    router.get('/credentials/get/:domain', require('./routes/credentials/get'));
    router.put('/credentials/add', require('./routes/credentials/put'));
    //TODO Implement
    //router.delete('/deals/:domain/:credential', require('./routes/deals/delete'));

    // Use them
    app.use(router.routes()).use(router.allowedMethods());
};