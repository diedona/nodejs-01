const express = require('express');
const routes = express.Router();

routes.get("/person", (req, res) => {
    res.send('ok!');
});

//

module.exports = routes;