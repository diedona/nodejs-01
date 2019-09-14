const mongoose = require("mongoose");
const requireDir = require("require-dir");
const app = require('./app');

module.exports = () => {

    // inicia models
    requireDir('./models');
    //inicia DB
    mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});
}