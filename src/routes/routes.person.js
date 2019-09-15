const express = require('express');
const routes = express.Router();
const asyncMiddleware = require('../helpers/wrap-async');

routes.get("/person", asyncMiddleware(async (req, res) => {
    res.json({name: 'diego doná', status: 'BARELY ALIVE'});
}));

//

module.exports = routes;