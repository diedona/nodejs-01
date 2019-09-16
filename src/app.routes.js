const express = require('express');
const routes = express.Router();

module.exports = [
    require('./routes/routes.auth'),
    require('./routes/routes.product'),
    require('./routes/routes.person')
];