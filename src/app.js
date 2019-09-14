const express = require("express");
const cors = require("cors");
const configureDb = require('./app.db');

// inicia aplicação
const app = express();
app.use(express.json());
app.use(cors());
configureDb();
app.use('/api', require('./app.routes'));
app.listen(3001);

module.exports = app;