const mongoose = require("mongoose");
const requireDir = require("require-dir");
const config = require('./app.config');

module.exports = () => {

    // inicia models
    requireDir('./models');

    //inicia DB
    mongoose.connect(config.db.connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

}