const express = require("express");
const cors = require("cors");
const configureDb = require('./app.db');
const config = require('./app.config');
const errorHandlers = require('./middleware/error');

// inicia aplicação
const app = express();
app.use(express.json());
app.use(cors());
configureDb();
app.use('/api', require('./app.routes'));
app.use(errorHandlers.generalError);
// app.use(errorHandlers.handleAssertionError);
// app.use(errorHandlers.handleDatabaseError);
app.listen(process.env.PORT || config.app.port);

module.exports = app;