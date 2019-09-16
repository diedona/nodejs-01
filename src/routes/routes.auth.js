const express = require('express');
const routes = express.Router();
const asyncMiddleware = require('../helpers/wrap-async');
const jwt = require("jsonwebtoken");
const config = require('../app.config');

const generateAuthToken = (user) => {
    const token = jwt.sign({ id: user.id, isAdmin: true }, config.privateKey); //get the private key from the config file -> environment variable
    return token;
}

routes.post('/login', asyncMiddleware(async (req, res) => {
    const user = req.body;
    try {
        
        if(user.id === "ddona" && user.password === "cl0se123"){
            const token = generateAuthToken(user);
            res.header("x-auth-token", token).send({
                id: user.id,
                name: user.name
            });
        } else {
            return res.status(400).send("Invalid user.");
        }

    } catch (error) {
        return res.status(400).send(error.details[0].message);
    }
}));

module.exports = routes;