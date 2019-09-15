const express = require("express");
const cors = require("cors");
const configureDb = require('./app.db');
const config = require('./app.config');

// inicia aplicação
const app = express();
app.use(express.json());
app.use(cors());
configureDb();
app.use('/api', require('./app.routes'));
app.listen(config.app.port);

module.exports = app;