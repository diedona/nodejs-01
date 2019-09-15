const express = require('express');
const routes = express.Router();

routes.get("/person", (req, res) => {
    res.json({name: 'diego doná', status: 'BARELY ALIVE'});
});

//

module.exports = routes;