const mongoose = require("mongoose");
const requireDir = require("require-dir");
const config = require('./app.config');

module.exports = () => {

    // inicia models
    requireDir('./models');

    //inicia DB
    const {host, port, name } = config.db;
    mongoose.connect(`mongodb://${host}:${port}/${name}`, {useNewUrlParser: true, useUnifiedTopology: true});

}